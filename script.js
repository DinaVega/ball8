let input = document.querySelector("#input");
let button = document.querySelector("#button");
let text = document.querySelector("#text");
let formNode = document.querySelector('form')

let answer = [
  "да",
  "конечно",
  "бесспорно",
  "должно быть так",
  "возможно",
  "шансов мало",
  "нет",
  "звезды говорят нет",
  "не могу сказать",
  "сейчас неизвестно",
  "спросите позже",
];

let words = [
  "Почему",
  "Зачем",
  "Как",
  "Где",
  "Что",
  "Кто",
  "Чей",
  "Когда",
  "Сколько",
  "Насколько",
  "Который",
  "Какой",
  "Каков",
  "Куда",
  "Откуда",
  "Докуда",
];

let getQuestion = function () {
  let check = () => // проверка вопроса на ДА и НЕТ
    words.some((el) =>
      input.value.toLowerCase().split(" ")[0].includes(el.toLowerCase())
      // сверяем первое слово вопроса с вопросами из массива words
    );

  let ball = () => {
    text.textContent = check() // если check равно тру
      ? "Задайте вопрос на да или нет"  // меняем текст в шаре
      : answer[Math.floor(Math.random() * answer.length)]; // иначе даём рандомный ответ
  };
  ball();
  input.value = ""
}

formNode.addEventListener("submit", function (event) {
  event.preventDefault();
  input.value ? getQuestion() : (text.textContent = "Задайте вопрос");
  // если в инпуте что-то есть - зарускаем getQuestion иначе просим звдать вопрос
});


