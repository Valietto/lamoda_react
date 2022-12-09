const getRandomString = () => Math.random().toString(36).substring(2);

const getRandomNum = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

export default function generateGoods(count = 100) {
  const goods = [];
  for (let i = 0; i < count; i++) {
    goods.push(generateGood());
  }
  return goods;
}

const generateGood = () => ({
  id: Date.now() + getRandomString(),
  name: generateName(),
  description: generateDescription(),
  color: generateColor(),
  rating: generateRating(),
  price: generatePrice(),
  image: generateImage(),
});

const COLORS = [
  "Черный",
  "Белый",
  "Фиолетовый",
  "Персиковый",
  "Красныый",
  "Розовый",
];

const generateColor = () => COLORS[getRandomNum(0, COLORS.length - 1)];

const generateName = () => getRandomString();
const DESCRIPTION_WORDS = [
  "унисекс",
  "поло",
  "мужские",
  "женские",
  "детские",
  "брендовый",
];
const generateDescription = (length = 4) => {
  const description = [];
  for (let i = 0; i < length; i++) {
    description.push(
      DESCRIPTION_WORDS[getRandomNum(0, DESCRIPTION_WORDS.length - 1)]
    );
  }
  return description.join(" ");
};
const IMAGES = [
  "https://a.lmcdn.ru/img600x866/R/T/RTLABN855101_17530433_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/A/D/AD002EWLUIE5_12895768_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLABL118901_17102884_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLABQ417001_17702851_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/P/U/PU053EMJZPE5_12010716_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLABZ982401_18165986_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLABM168001_17278923_1_v1.jpg",
];
const generateRating = () => getRandomNum(1, 100);
const generatePrice = () => getRandomNum(50, 900000);
const generateImage = () => IMAGES[getRandomNum(0, IMAGES.length - 1)];
