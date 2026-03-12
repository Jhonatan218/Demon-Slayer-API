const container = document.getElementById("characters");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageNumber = document.getElementById("pageNumber");

let page = 1;

async function getCharacters() {

    const url = `https://www.demonslayer-api.com/api/v1/characters?page=${page}`;

    const response = await fetch(url);
    const data = await response.json();

    container.innerHTML = "";

    data.content.forEach(character => {

        const image = character.img;

        container.innerHTML += `
        <div class="card" onclick="goToDetail(${character.id})">
            <img src="${image}" alt="${character.name}">
            <div class="card-info">
                <h3>${character.name}</h3>
                <p>Raza: ${character.race}</p>
                <p>Genero: ${character.gender}</p>
            </div>
        </div>
        `;
    });

    pageNumber.textContent = `Página ${page}`;
}

nextBtn.addEventListener("click", () => {
    page++;
    getCharacters();
});

prevBtn.addEventListener("click", () => {
    if (page > 1) {
        page--;
        getCharacters();
    }
});

getCharacters();

function goToDetail(characterId) {
    localStorage.setItem("characterId", characterId);
    window.location.href = "detail.html";
}