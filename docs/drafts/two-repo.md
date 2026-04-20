## Два репозитория: однонаправленное зеркалирование (GitHub → Bitbucket)

### Суть подхода
Разработка и эксперименты — в GitHub (второстепенный), чистый код — в Bitbucket (целевой).  
Передача только коммитами, PR/MR запрещены.

---

### 1. Инициализация (добавляем GitHub к существующему локальному проекту из Bitbucket)

```bash
# Уже есть локальный репозиторий с remote origin (Bitbucket)
git remote -v
# origin  https://bitbucket.org/user/repo.git

# Добавляем GitHub как второй remote
git remote add github https://github.com/user/repo.git

# Настраиваем зеркалирование (однонаправленно: GitHub → Bitbucket)
# Для этого нужно, чтобы GitHub был "источником правды" для экспериментов
```

**Важно:** автор коммитов для Bitbucket должен быть корректным. Проверяем и фиксируем глобально или локально:

```bash
# Проверка текущих настроек
git config user.name
git config user.email

# Локально для репозитория (перебивает глобальные)
git config user.name "Ваше Имя"
git config user.email "email@bitbucket-account.com"

# Проверка подписи коммитов (если Bitbucket требует GPG)
git config commit.gpgsign true
git config user.signingkey <KEY-ID>
```

---

### 2. Кейс: новая фича (эксперименты в GitHub)

```bash
# Работаем в GitHub remote
git checkout -b feature/experiment

# Делаем коммиты (автор уже настроен под Bitbucket)
git add .
git commit -m "WIP: эксперимент с X"

# Пушим в GitHub (черновик, не для Bitbucket)
git push github feature/experiment

# ... множество экспериментов, извращений, переписывания истории ...

# Когда фича готова к передаче в Bitbucket:
git checkout main
git pull github main                 # забираем готовый код из GitHub
git push origin main                 # отправляем в целевой Bitbucket
```

**Ветки для извращений остаются только в GitHub** — они не засоряют Bitbucket.

---

### 3. Кейс: отладка и запуск только в Bitbucket

Причины, почему запуск ограничен Bitbucket'ом:

- Сложная среда: специфичные ОС, библиотеки, компиляторы
- Лицензионное ПО, которое нельзя разворачивать везде
- Закрытые API / внутренние сервисы компании
- Дорогие вычислительные ресурсы (GPU, большие RAM)
- Строгие требования безопасности (сеть, аудит)
- Разные версии зависимостей между средой разработки и боевой

**Workflow:**
```bash
# Фича разработана в GitHub, залита в main GitHub
git push github main

# На машине с доступом к Bitbucket (и ко всей инфраструктуре):
git pull origin main                 # тянем из Bitbucket
# Запуск, отладка, тестирование
./run_tests.sh
# Если найдены баги — правим в GitHub, повторяем цикл
```

---

### 4. Проверка автора коммитов перед отправкой в Bitbucket

Перед `git push origin main` обязательно:

```bash
# Посмотреть авторов последних коммитов
git log --oneline --format="%h %an <%ae> %s" -10

# Если кто-то забыл настроить user.email — поправить последний коммит
git commit --amend --author="Имя <email@bitbucket.com>"

# Если нужно переписать несколько коммитов
git rebase -i HEAD~5
# в редакторе: для нужных коммитов заменить pick на edit
git commit --amend --author="..."
git rebase --continue
```

---

### Резюме команд для ежедневной работы

```bash
# 1. Экспериментируем в GitHub
git checkout -b exp/new-thing
git commit -am "эксперимент"
git push github exp/new-thing

# 2. Когда готово — сливаем в main GitHub
git checkout main
git merge exp/new-thing
git push github main

# 3. Передаём в Bitbucket (только main)
git push origin main

# 4. Отладка на целевой среде
git pull origin main
make test
```

---

### Где и когда это полезно

| Ситуация | Почему подход хорош |
|----------|---------------------|
| Bitbucket — "чистая" зона, только проверенный код | GitHub принимает любой мусор, черновики, переписанную историю |
| Разные политики доступа | GitHub могут иметь все разработчики, Bitbucket — только CI/CD или лид |
| Эксперименты с rebase, filter-branch, force push | В GitHub можно делать что угодно, Bitbucket не пострадает |
| Обучение новичков | Новички ломают GitHub — безболезненно, Bitbucket остаётся эталоном |
| Интеграции только с Bitbucket (Jira, Jenkins, Artifactory) | GitHub — песочница, не требует настройки всех плагинов |
| Аудит коммитов | В Bitbucket попадают только коммиты с правильным автором и подписью |

**Ключевая выгода:** Bitbucket остаётся *источником истины* для продакшена, GitHub — полигоном для идей.
