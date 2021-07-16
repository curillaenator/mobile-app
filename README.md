# React-Redux SPA мобильное приложение

[Мобильное приложение по аренде инвентаря](http://curillaenator.github.io/mobile-app)

## Cтек:

- ReactJS
- Typescript
- Redux
- Styled-components (css-in-ts)

## Реализовано:

1. Верстка интерфейса по Figma макету
2. Отображение карточек из JSON данных

- карточка: галлерея фотографий карточки
- карточка: автообновляемый калькулятор цены карточки исходя из выбранных доп.опций и времени аренды

3. Формироание заявки из карточки с учетом выбранных опций по клику на соостветствуюшую кнопку
4. Модальные окна

- просмотр видео на главном экране по клику на фрейм
- формирование заказа из карточки

5. Пагинация новостей

## Скриншоты:

<div style="display: flex; align-items: center; justify-content: center, margin-bottom: 32px">
  <img style="margin-right: 32px" src="/screens/image1.jpg">
  <img src="/screens/image2.jpg">
</div>

<div style="display: flex; align-items: center; justify-content: center, margin-bottom: 32px">
  <img style="margin-right: 32px" src="/screens/image3.jpg">
  <img src="/screens/image4.jpg">
</div>

## API

API имитирует поведение библиотеки Axios, но вместо заросов на сервер берет данные из локально сформированных моделей. Методы API возвращают промисы с данными, данные отправляются в redux-стор через thunk, откуда их берет приложение для отрисовки.

## Запустить локально:

### `npm install`

затем

### `npm start`
