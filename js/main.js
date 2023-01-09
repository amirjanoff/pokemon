var elBox = document.querySelector("[data-pokemon]");
var elTitle = document.querySelector("[data-title");
var elForm = document.querySelector("[data-form");
var elImageUrl = document.querySelector("[data-form-img-url]");
var elName = document.querySelector("[data-form-name]");
var elType = document.querySelector("[data-form-type]");
var elWeight = document.querySelector("[data-form-weight]");
var elHeight = document.querySelector("[data-form-height]");

const favorites = [];
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var pokemon = {
    img: null,
    name: null,
    type: "",
    weight: null,
    height: null,
  };
  pokemon.img = elImageUrl.value;
  pokemon.name = elName.value;
  pokemon.type = elType.value;
  pokemon.weight = elWeight.value;
  pokemon.height = elHeight.value;

  pokemons.unshift(pokemon);

  renderPokemon();
});

renderPokemon();
function renderPokemon() {
  elBox.innerHTML = "";
  for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    var elCard = document.createElement("div");
    var elImg = document.createElement("img");
    var elLine = document.createElement("span");
    var elSubtitle = document.createElement("h4");
    var elTextTitle = document.createElement("h5");
    var elSubtitleCard = document.createElement("div");
    var elWeightSpan = document.createElement("span");
    var elHeightSpan = document.createElement("span");
    var elPokemonImgBox = document.createElement("div")
    const elPokemonButton = document.createElement("button")

    elWeightSpan.setAttribute("class", "pokemon-weight")
    elHeightSpan.setAttribute("class", "pokemon-height d-block mb-2")
    elTextTitle.setAttribute("class", "text-title");
    elSubtitleCard.setAttribute("class", "card-subtitle");
    elSubtitle.setAttribute("class", "name");
    elLine.setAttribute("class", "line");
    elCard.setAttribute("class", "card");
    elImg.setAttribute("class", "pokemon-img");
    elPokemonButton.setAttribute("class", "btn btn-danger")
    elPokemonImgBox.setAttribute("class", "pokemon-box")
    elImg.src = `${pokemon.img}`;
    elImg.width = 157;
    elImg.height = 157;
    elImg.alt = `${pokemon.name}`;
    elSubtitle.textContent = `${pokemon.name}`;
    elTextTitle.textContent = `${pokemon.type}`;
    elWeightSpan.textContent = ` ${pokemon.weight}`;
    elHeightSpan.textContent = `${pokemon.height}`;
    elPokemonButton.textContent = `Favourites`
   
    elCard.appendChild(elPokemonImgBox);
    elPokemonImgBox.appendChild(elImg);
    elCard.appendChild(elLine);

    elSubtitleCard.appendChild(elSubtitle);
    elSubtitleCard.appendChild(elTextTitle);
    elSubtitleCard.appendChild(elWeightSpan);
    elSubtitleCard.appendChild(elHeightSpan);
    elSubtitleCard.appendChild(elPokemonButton)

    elCard.appendChild(elSubtitleCard);
    elBox.appendChild(elCard);
  }
}
// elCard.addEventListener("click", (evt) => {
//   onFavoriteClick(evt)
// })
// function onFavoriteClick(evt) {
//   const el = evt.target.closest("[]")
//   if(!el) return;
// }