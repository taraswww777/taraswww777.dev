const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');

// Функция для выполнения команды в терминале
function runCommand(command) {
    return execSync(command, { encoding: 'utf-8' }).trim();
}

// Функция для создания интерактивного запроса
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

// Получение аргументов командной строки
const args = process.argv.slice(2);
const params = {};
args.forEach(arg => {
    const [key, value] = arg.split('=');
    params[key] = value;
});

// Конфигурация
const targetBranch = params.targetBranch || 'develop'; // Можно изменить на 'master' или 'main'
const protectedBranches = ['develop', 'main', 'master'];
const step = params.step || 'full'; // По умолчанию полный процесс
const FILE_NAMES = {
  REMOTE_BRANCHES_BEFORE: 'remote-branches-before.txt',
  REMOTE_BRANCHES_AFTER: 'remote-branches-after.txt',
  REMOTE_BRANCHES_FOR_DELETE: 'remote-branches-for-delete.txt',
  LOCAL_BRANCHES_BEFORE: 'local-branches-before.txt',
  LOCAL_BRANCHES_AFTER: 'local-branches-after.txt',
  LOCAL_BRANCHES_FOR_DELETE: 'local-branches-for-delete.txt',
};

const isProtectedBranch = (branch) => (
  branch.includes('/release/') ||
  protectedBranches.some(protectedBranch => branch.includes(protectedBranch))
)

/**  Подготавливаем список веток для удаления */
const prepareBranchesForDelete = () => {
  // Готовим список кандидатов на удаление
  const remoteBranches = runCommand('git branch -r --merged')
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => !isProtectedBranch(branch));

  // Готовим список кандидатов на удаление
  const localBranches = runCommand('git branch --merged')
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => !isProtectedBranch(branch));

  // Подготавливаем список веток для удаления
  const remoteBranchesForDelete = remoteBranches.map(branch => branch.replace('origin/', ''));
  fs.writeFileSync(FILE_NAMES.REMOTE_BRANCHES_FOR_DELETE, remoteBranchesForDelete.join('\n'));

  const localBranchesForDelete = localBranches.map(branch => branch.replace('origin/', ''));
  fs.writeFileSync(FILE_NAMES.LOCAL_BRANCHES_FOR_DELETE, localBranchesForDelete.join('\n'));

  return {
    remoteBranchesForDelete,
    localBranchesForDelete
  }
}

async function main() {
    if (step === 'delete') {
        // Прямой переход к шагу 4: Удаление веток
      await deleteOriginBranches();
        return;
    }

    // Переход на целевую ветку
    runCommand(`git checkout ${targetBranch}`);

    // Шаг 1: Собираем все ветки
    runCommand('git fetch --all');
    runCommand(`git branch -r > ${FILE_NAMES.REMOTE_BRANCHES_BEFORE}`);
    runCommand(`git branch > ${FILE_NAMES.LOCAL_BRANCHES_BEFORE}`);


    // Шаг 2: Готовим список кандидатов на удаление
    const {localBranchesForDelete,remoteBranchesForDelete} = prepareBranchesForDelete();

    // Выводим список удаляемых веток
    console.log('Список веток для удаления:');
    localBranchesForDelete.forEach(branch => console.log(branch));
    remoteBranchesForDelete.forEach(branch => console.log(branch));

    // Запрашиваем подтверждение у пользователя
    const answer = await askQuestion('Вы уверены, что хотите удалить эти ветки? (y/n): ');

    if (answer.toLowerCase() !== 'y') {
        console.log('Операция отменена.');
        return;
    }

    // Переходим к шагу 4: Удаление веток
  await deleteOriginBranches();
  await deleteLocalBranches();

    // Шаг 5: Собираем все оставшиеся ветки
  runCommand(`git branch -r > ${FILE_NAMES.REMOTE_BRANCHES_AFTER}`);
  runCommand(`git branch  > ${FILE_NAMES.LOCAL_BRANCHES_AFTER}`);

    console.log('Процесс удаления завершен.');
}

async function deleteOriginBranches() {
    // Читаем список веток для удаления из файла
  const remoteBranchesForDelete = fs.readFileSync(FILE_NAMES.REMOTE_BRANCHES_FOR_DELETE, 'utf-8').split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch);

    // Удаляем лишние ветки
    remoteBranchesForDelete.forEach(branch => {
       runCommand(`git push origin --delete ${branch}`);
    });
}

async function deleteLocalBranches() {
  // Читаем список веток для удаления из файла
  const remoteBranchesForDelete = fs.readFileSync(FILE_NAMES.LOCAL_BRANCHES_FOR_DELETE, 'utf-8').split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch);

  // Удаляем лишние ветки
  remoteBranchesForDelete.forEach(branch => {
    runCommand(`git branch --delete ${branch}`);
  });
}


main().catch(err => console.error('Произошла ошибка:', err));
