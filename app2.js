const input = document.querySelector('.card__img-input');
const li = document.querySelectorAll('li');

const search = (e) => {
	let text = e.target.value.toLowerCase();

	li.forEach((item) => {
		if (!item.textContent.toLowerCase().includes(text)) {
			item.style.display = 'none';
		} else {
			item.style.display = 'block';
		}
	});
};
input.addEventListener('keyup', search);
