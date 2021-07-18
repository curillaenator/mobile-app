# React-Redux SPA мобильное приложение

[Мобильное приложение по аренде инвентаря](http://curillaenator.github.io/mobile-app)

## Cтек:

- ReactJS
- Typescript
- Redux
- Styled-components (css-in-ts)

## Реализовано:

1. Верстка интерфейса по Figma макету
2. Отображение карточек из JSON-подобных данных

- галлерея фотографий карточки
- автообновляемый калькулятор цены карточки исходя из выбранных доп.опций и времени аренды

3. Формироание заявки из карточки с учетом выбранных опций по клику на соостветствуюшую кнопку
4. Модальные окна

- просмотр видео на главном экране по клику на фрейм
- формирование заказа из карточки
- просмотр новости по клику

5. Пагинация новостей

## Скриншоты:

1. Главный экран и карточка

<div style="display: flex; align-items: center; justify-content: center, margin-bottom: 32px">
  <img style="margin-right: 32px" src="/screens/image1.jpg">
  <img src="/screens/image2.jpg">
</div>

2. Модальные окна заказа и просмотр новости

<div style="display: flex; align-items: center; justify-content: center, margin-bottom: 32px">
  <img style="margin-right: 32px" src="/screens/image3.jpg">
  <img src="/screens/image4.jpg">
</div>

3. Дропдаун "аккордион" с дополнительной информацией

<div style="display: flex; align-items: center; justify-content: center, margin-bottom: 32px">
  <img src="/screens/image5.jpg">
</div>

## API

API имитирует поведение библиотеки Axios, но вместо заросов на сервер берет данные из локально сформированных моделей. Методы API возвращают промисы с данными, данные отправляются в redux-стор через thunk, откуда их берет приложение для отрисовки.

## Запустить локально:

### `npm install`

затем

### `npm start`
