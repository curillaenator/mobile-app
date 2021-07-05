import photo from "../assets/images/photo.jpg";

const photos = [photo, photo, photo, photo, photo];

const rent = [
  "1 час",
  "2 часа",
  "3 часа",
  "5 часов",
  "выставка 2 дня",
  "выставка 3 дня",
];

const options = new Array(20).fill(1).map((_, i) => ({
  id: `option${i}`,
  photo: photo,
  title: `Разработка макета рамки №${i}`,
  price: 17500 + 100 * i,
}));

const boothlist = new Array(20).fill(1).map((_, i) => ({
  id: `booth${i}`,
  title: `Фотобудка с ширмой №${i}`,
  size: "2м x 1.5м x 2 м",
  photos,
  options,
  rent,
  price: 17000 + 100 * i,
}));

export const fakeApi = {
  getBoothList: () => new Promise((resolve) => resolve(boothlist)),
};
