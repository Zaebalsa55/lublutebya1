# Настройка переменных окружения

## Создайте файл `.env.local` в корне проекта:

```bash
# Google Analytics Configuration
# Получите ваш GA ID на https://analytics.google.com
# Формат: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Production Domain (замените на ваш домен)
NEXT_PUBLIC_DOMAIN=https://sosamba3.vercel.app
```

## Как получить Google Analytics ID:

1. Идите на https://analytics.google.com
2. Нажмите "Начать" или войдите в аккаунт
3. Создайте новое свойство
4. Выберите "Веб" 
5. Введите название сайта: "РемСтирМаш - Ремонт стиральных машин"
6. URL сайта: ваш домен
7. Скопируйте ID вида `G-XXXXXXXXXX`
8. Вставьте в `.env.local`

## После настройки:

1. Перезапустите dev сервер: `npm run dev`
2. Откройте сайт в браузере
3. В Google Analytics → Reports → Realtime должны появиться посетители

## Контактные данные (уже в SEO):
- **Телефон**: +38 (098) 467-13-52
- **Email**: remstirmash@gmail.com  
- **Адрес**: пл. Независимости, 1, Одесса, Одесская область, 65000
- **Время работы**: Пн-Вс: 9:00-21:00
