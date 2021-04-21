const formPoint = document.querySelector('#formPoint');
const formPlayer = document.querySelector('#formPlayer');

const inputPoint = document.querySelector('#pointMax');
const inputName = document.querySelector('#namePlayer');

const inputChange = document.querySelector('#change');
const plus = document.querySelector('.fa-plus');

const insertPlayer = document.querySelector(
	'#insertPlayer'
);
const template = document.querySelector('#template')
	.content;
const fragment = document.createDocumentFragment();

let players = {};

document.addEventListener('DOMContentLoaded', () => {
	viewPlayer();
});

insertPlayer.addEventListener('click', (e) => {
	btnAction(e);
});

formPoint.addEventListener('submit', (e) => {
	e.preventDefault();
	setPoint(e);
});

const setPoint = (e) => {
	if (inputPoint.value.trim() === '') {
		console.log('Agregar los punto máximos');
		return;
	}
	const point = inputPoint.value;
	console.log(point);
	formPoint.reset();
};

formPlayer.addEventListener('submit', (e) => {
	e.preventDefault();
	if (inputName.value.trim() === '') {
		console.log('Agregar los jugadores');
		return;
	}
	const player = {
		id: Date.now(),
		name: inputName.value,
		point: 0,
	};
	players[player.id] = player;
	formPlayer.reset();
	viewPlayer();
});

const viewPlayer = () => {
	insertPlayer.innerHTML = '';
	Object.values(players).forEach((player) => {
		const clone = template.cloneNode(true);
		clone.querySelector('.player').textContent =
			player.name;
		clone.querySelector('.point').textContent =
			player.point;
		clone.querySelector('.fa-plus').dataset.id = player.id;
		fragment.appendChild(clone);
	});

	insertPlayer.appendChild(fragment);
};

const btnAction = (e) => {
	if (e.target.classList.contains('fa-plus')) {
		console.log(e.target.dataset.id);
	}
	e.stopPropagation();
};

/* plus.onclick = function () {
	removeClass();
	console.log('click');
};

function removeClass() {
	inputChange.classList.remove('inputChange');
	inputChange.classList.toggle('inputView');
} */
