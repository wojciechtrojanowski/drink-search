const input = document.querySelector('.card__img-input');
const li = document.querySelectorAll('li');
let liArray = Array.from(li);
let text = input.value;

const search = (text) => {
	liArray.forEach((item) => {
		if (!item.textContent.toLowerCase().includes(text)) {
			item.classList.add('hide');
		} else {
			item.classList.remove('hide');
		}
	});
};

const handleKeyboard = (e) => {
	if (e.key == 'Backspace') {
		text = text.split('');
		text.pop();
		text = text.join('');

		search(text);
	} else {
		text += e.key;
		search(text);
	}
};

input.addEventListener('keyup', handleKeyboard);
