import photo from "../assets/images/photo.jpg";
import photo2 from "../assets/images/photo2.jpg";
import newsPhoto from "../assets/images/newsPhoto.jpg";

import type { ICard, INews, IFaq } from "../types/types";

const photos: string[] = [photo, photo, photo, photo, photo];

const rentNames = [
  "1 час",
  "2 часа",
  "3 часа",
  "5 часов",
  "выставка 2 дня",
  "выставка 3 дня",
];

const rentQs = [1, 2, 3, 5, 10, 12];

const rent = new Array(6).fill(1).map((_, i) => ({
  id: `rent${i}`,
  title: rentNames[i],
  priceQ: rentQs[i],
  checked: false,
}));

const options = new Array(20).fill(1).map((_, i) => ({
  id: `option${i}`,
  photo: photo2,
  title: `Разработка макета рамки №${i}`,
  price: 1750 + 100 * i,
  checked: false,
}));

const cardList = new Array(20).fill(1).map((_, i) => ({
  id: `booth${i}`,
  title: `Фотобудка с ширмой №${i}`,
  size: "2м x 1.5м x 2 м",
  photos,
  options,
  rent,
  price: 17000 + 100 * i,
}));

const newsList = new Array(20).fill(1).map((_, i) => ({
  id: `news${i}`,
  title: `Фотобудки, GIF стойка ${i}`,
  type: "Услуги",
  photoURL: newsPhoto,
  content: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
  date: "20 Марта 2021",
}));

const faqList = new Array(6).fill(1).map((_, i) => ({
  id: `faq${i}`,
  title: `Какой реквизит идет в комплекте №${i}?`,
  content:
    "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
}));

const videoURL = "https://www.youtube.com/watch?v=PZkSXpLCOqg";

export const fakeApi = {
  getVideoURL(): Promise<string> {
    return new Promise((resolve) => resolve(videoURL));
  },
  getBoothList(): Promise<ICard[]> {
    return new Promise((resolve) => resolve(cardList));
  },
  getTotalNews(): Promise<number> {
    return new Promise((resolve) => resolve(newsList.length));
  },
  getNewsList(start: number, end: number): Promise<INews[]> {
    return new Promise((resolve) => resolve([...newsList].splice(start, end)));
  },
  getFaqList(): Promise<IFaq[]> {
    return new Promise((resolve) => resolve(faqList));
  },
};
