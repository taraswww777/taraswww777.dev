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

async function main() {
    if (step === 'delete') {
        // Прямой переход к шагу 4: Удаление веток
        await deleteBranches();
        return;
    }

    // Переход на целевую ветку
    runCommand(`git checkout ${targetBranch}`);

    // Шаг 1: Собираем все ветки
    runCommand('git fetch --all');
    runCommand('git branch -r > branches-before.txt');

    // Шаг 2: Готовим список кандидатов на удаление
    const branches = runCommand('git branch -r --merged').split('\n')
        .map(branch => branch.trim())
        .filter(branch => !protectedBranches.some(protectedBranch => branch.includes(protectedBranch)))
        .filter(branch => !branch.includes('/release/'));

    // Шаг 3: Подготавливаем список веток для удаления
    const branchesForDelete = branches.map(branch => branch.replace('origin/', ''));
    fs.writeFileSync('branches-for-delete.txt', branchesForDelete.join('\n'));

    // Выводим список удаляемых веток
    console.log('Список веток для удаления:');
    branchesForDelete.forEach(branch => console.log(branch));

    // Запрашиваем подтверждение у пользователя
    const answer = await askQuestion('Вы уверены, что хотите удалить эти ветки? (y/n): ');

    if (answer.toLowerCase() !== 'y') {
        console.log('Операция отменена.');
        return;
    }

    // Переходим к шагу 4: Удаление веток
    await deleteBranches();

    // Шаг 5: Собираем все оставшиеся ветки
    runCommand('git branch -r > branches-after.txt');

    console.log('Процесс удаления завершен.');
}

async function deleteBranches() {
    // Читаем список веток для удаления из файла
    const branchesForDelete = fs.readFileSync('branches-for-delete.txt', 'utf-8').split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch);

    // Удаляем лишние ветки
    branchesForDelete.forEach(branch => {
        if (!protectedBranches.includes(branch) && !branch.includes('/release/')) {
            runCommand(`git push origin --delete ${branch}`);
        }
    });
}

main().catch(err => console.error('Произошла ошибка:', err));
