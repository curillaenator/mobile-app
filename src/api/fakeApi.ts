import photo from "../assets/images/photo.jpg";
import photo2 from "../assets/images/photo2.jpg";
import newsPhoto from "../assets/images/newsPhoto.jpg";

import type { ICard, INews, IFaq } from "../types/types";

const photos: string[] = [photo, photo2, newsPhoto, photo2, photo];
const newsPhotos: string[] = [newsPhoto, photo, newsPhoto, photo2, newsPhoto];

// create cards for api

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

// create news for api

const text =
  "Первую патентную заявку на фотокабину в 1888 году подали инженеры из Балтимора Уильям Поуп и Эдвард Пул (англ. William Pope, Edward Poole)[4]. Работоспособное устройство через год запатентовал и создал французский изобретатель Теофил Энгельберт. В 1889 году его фотоавтомат демонстрировался на Всемирной выставке в Париже[5][6]. В 1924 году на Бродвее в Нью-Йорке была запущена первая фотокабина, сконструированная американским изобретателем российского происхождения Анатолем Марко Джозефо (Анатолий Йозефович)[7]. Фотокабины пользовались огромной популярностью и приносили такую прибыль, что вся компания «Photomaton» через несколько лет была продана за миллион долларов. Коммерческому успеху не смогли помешать даже Великая депрессия и Вторая мировая война[8]. Фотокабина состоит из двух отсеков, в одном из которых на стуле располагается клиент, а в другом смонтировано фотооборудование[1]. Аппаратный отсек первых фотокабин кроме купюроприёмника, фотоаппарата и осветительных фотовспышек содержал погружной фильм-процессор револьверного типа, производивший химико-фотографическую обработку снимков. Из-за этого ранние модели автоматов нуждались в подключении к водопроводу и канализации. Более поздние кабины были автономными и могли обходиться без обслуживания до трёх недель[8]. Съёмка велась на обращаемую фотобумагу без промежуточного негатива, благодаря чему время готовности фотографий не превышало 3—5 минут[1][9]. В процессе работы автомата через определённый интервал времени последовательно делались несколько снимков (чаще всего 4), которые получались в виде серии на полоске фотобумаги. Современные фотоавтоматы состоят из цифрового фотоаппарата, простейшего компьютера с контрольным монитором и цветного фотопринтера. Многие из них собираются кустарным образом из стандартных компонентов. Современная цифровая фотокабина оснащается более совершенным управлением, позволяющим выбирать формат и другие параметры снимка. Контроль изображения происходит не по зеркалу, как это было в аналоговых устройствах, а по монитору, установленному рядом с объективом камеры. После съёмки на мониторе выбирается один снимок, который распечатывается в нужном количестве экземпляров. В дальнейшем фотокабинами стали называться также устройства, не производящие фотосъёмку, а предназначенные для автоматической печати цифровых снимков, сделанных клиентом самостоятельно.";

const newsList = new Array(20).fill(1).map((_, i) => ({
  id: `news${i}`,
  title: `Фотобудки, GIF стойка ${i}`,
  type: "Услуги",
  photoURL: newsPhotos,
  content: text.slice(0, Math.floor(Math.random() * 400) + 20),
  date: "20 Марта 2021",
}));

const faqList = new Array(6).fill(1).map((_, i) => ({
  id: `faq${i}`,
  title: `Какой реквизит идет в комплекте №${i}?`,
  content: text.slice(0, Math.floor(Math.random() * 400) + 20),
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
