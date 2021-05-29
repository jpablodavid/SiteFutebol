let i = 0;
let j = 1;
let y = 2;
let time = 3000;

//funçãos para mudar imagem

function change() {
	//card
	document.querySelector(".card_img").src = jogadoresJson[0].img;

	document.querySelector(".desc__name").innerHTML =
		"Name: " + jogadoresJson[i].name;

	document.querySelector(".desc__age").innerHTML =
		"Age: " + jogadoresJson[i].idade;

	//card2
	document.querySelector(".card2 .card_img").src = jogadoresJson[j].img;

	document.querySelector(".card2 .desc__name").innerHTML =
		"Name: " + jogadoresJson[j].name;

	document.querySelector(".card2 .desc__age").innerHTML =
		"Age: " + jogadoresJson[j].idade;

	//card2
	document.querySelector(".card3 .card_img").src = jogadoresJson[y].img;

	document.querySelector(".card3 .desc__name").innerHTML =
		"Name: " + jogadoresJson[y].name;

	document.querySelector(".card3 .desc__age").innerHTML =
		"Age: " + jogadoresJson[y].idade;

	if (i < jogadoresJson.length - 1 && j < jogadoresJson.length - 1 && y < jogadoresJson.length - 1) {
		i++;
		j++;
		y++;
	} else {
		i = 0;
		j = 1;
		y = 2;
	}

	setTimeout("change()", time);
}

window.onload = change;

//mostrar jogadores na pagina team

const c = (elemento) => document.querySelector(elemento);
const cs = (elemento) => document.querySelectorAll(elemento);
let modalKey = 0;

jogadoresJson.map((item, index) => {
	let jogadorItem = c(".card").cloneNode(true);

	jogadorItem.setAttribute("data-key", index);
	jogadorItem.querySelector(".card img").src = item.img;
	jogadorItem.querySelector(".name").innerHTML = item.name;
	jogadorItem.querySelector(".age").innerHTML = item.idade;


	//evento de abrir o m0dal
	jogadorItem.querySelector("a").addEventListener("click", (event) => {
		event.preventDefault();

		let key = event.target.closest(".card").getAttribute("data-key");

		modalKey = key;

		c(".modal__img img").src = jogadoresJson[key].img;
		c(".info__name").innerHTML = jogadoresJson[key].name + ' Sobrenome';
		c(".info__age").innerHTML = 'Idade: ' + jogadoresJson[key].idade;
		c(".info__camisa").innerHTML = 'Camisa: ' + jogadoresJson[key].numero;
		c(".info__position").innerHTML = 'Posição: ' + jogadoresJson[key].position;
		c(".info__nota").innerHTML = 'Nota: ' + jogadoresJson[key].nota;
		c(".info__desc").innerHTML = jogadoresJson[key].description;


		c(".modal").style.opacity = 0;
		c(".modal").style.display = "flex";
		setTimeout(() => {
			c(".modal").style.opacity = 1;
		}, 200);
	});

	c(".team__area").append(jogadorItem);
});

//eventos do modal
function closeModal() {
  c('.modal').style.opacity = 0;
  setTimeout(() => {
    c(".modal").style.display = 'none';
  }, 500);
}

cs(".modal button").forEach(
	(item) => {
		item.addEventListener("click", closeModal);
	}
);

//slider hero

new Glider(document.querySelector(".glider"), {
	itemWidth: undefined,
	slidesToShow: 3,
	slidesToScroll: 1,
	draggable: true,
	dots: ".dots",
	arrows: {
		prev: ".glider-prev",
		next: ".glider-next",
	},
});
