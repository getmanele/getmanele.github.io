var randomNumber = Math.floor(Math.random() * 100) +1 ;		// Первой переменной - randomNumber - присваивается случайное число от 1 до 100, вычисленное с использованием математического алгоритма.

// Следующие три переменные сделаны для хранения ссылок на абзацы результатов в нашем HTML и используются для вставки значений в абзацы, приведенные далее в коде:
var guesses = document.querySelector('.guesses');			// <p class="guesses"></p>
var lastResult = document.querySelector('.lastResult');		// <p class="lastResult"></p>
var lowOrHi = document.querySelector('.lowOrHi');			// <p class="lowOrHi"></p>

// Следующие две переменных хранят ссылки на форму ввода текста и кнопку отправки а позже используются для управления подачи догадки .
var guessSubmit = document.querySelector('.guessSubmit');	// <label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
var guessField = document.querySelector('.guessField');		// <input type="submit" value="Submit guess" class="guessSubmit">

// Наши последние две переменные сохраняют количество догадок 1 (используется для отслеживания того, сколько догадок у игрока было), и ссылку на кнопку сброса, которая еще не существует (но позже).
var guessCount = 1;											
var resetButton;

function checkGuess() {
	alert('I am a placeholder');
}

function checkGuess() {
  var userGuess = Number(guessField.value);					// объявляет переменную с именем userGuess и устанавливает ее значение на то, что сейчас введено в текстовое поле. Мы также пропускаем это значение через встроенный метод Number(), чтобы убедится, что значение точно является числом.
  
  // Затем мы сталкиваемся с нашим первым блоком условного кода (строки 3–5 в коде выше). 
  // Блок условного кода позволяет выборочно запускать код в зависимости от того, 
  // является определенное условие истинным или нет. Он немного похож на функцию, но это не так. 
  // Простейшая форма условного блока начинается с ключевого слова if, за ним круглые скобки, за ними еще фигурные скобки. 
  // В круглые скобки мы добавляем проверку. Если проверка возвращает true, запускается код в фигурных скобках. 
  // Если нет, этот код пропускается и мы переходим к следующей части кода. 
  // В этом случае проверяется равна ли переменая guessCount числу 1 (то есть является ли это первой попыткой игрока или нет):
  // guessCount === 1
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';				// Если это так, мы выводим параграф с содержанием "Previous guesses: ". Если нет, ничего не делаем.
  }
  guesses.textContent += userGuess + ' ';					// Строка 6 добавяет текущее знаение userGuess  в конец параграфа guesses, 
  															// плюс пустое пространство поэтому между каждыми показанными предположениями будет пробел.

  // Следующий блок (строки 8–24 ) делает несколько проверок:
  // Первая конструкция  if(){ } проверяет, совпадает ли предположение пользователя с randomNumber установленному в верхней части нашего JavaScript. 
  // Если это так, игрок правильно догадался, и игра выиграна, поэтому мы показываем игроку поздравительное сообщение с приятным зеленым цветом, 
  // очищаем содержимое окна информации о минимуме / максимуме и запускаем функцию, называемую setGameOver ()

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}
function resetGame() {
	guessCount = 1;
	const resetParas = document.querySelectorAll('.resultParas p');
	for(let i = 0 ; i < resetParas.length ; i++) {
  	resetParas[i].textContent = '';
}
resetButton.parentNode.removeChild(resetButton);
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();
lastResult.style.backgroundColor = 'white';
randomNumber = Math.floor(Math.random() * 100) + 1;
}















