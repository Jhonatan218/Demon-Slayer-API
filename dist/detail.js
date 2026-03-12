const detailContainer = document.getElementById("detailContainer");

async function getCharacterDetail() {
    const characterId = localStorage.getItem("characterId");

    if (!characterId) {
        detailContainer.innerHTML = "<p class='loading'>Error: No se encontró el ID del personaje</p>";
        return;
    }

    try {
        const url = `https://www.demonslayer-api.com/api/v1/characters?id=${characterId}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.content && data.content.length > 0) {
            const character = data.content[0];

            detailContainer.innerHTML = `
                <div class="detail-header">
                    <div class="detail-image">
                        <img src="${character.img}" alt="${character.name}">
                    </div>
                    <div class="detail-info">
                        <h2>${character.name}</h2>
                        <p><strong>Edad:</strong> ${character.age ? character.age : 'Información no disponible'}</p>
                        <p><strong>Género:</strong> ${character.gender}</p>
                        <p><strong>Raza:</strong> ${character.race}</p>
                        <p><strong>Afiliación:</strong> ${character.affiliation ? character.affiliation.name : 'Información no disponible'}</p>
                    </div>
                </div>
                <div class="detail-description">
                    <h3>Descripción</h3>
                    <p>${character.description}</p>
                </div>
                ${character.quote ? `<div class="detail-description">
                    <h3>Frase Célebre</h3>
                    <p>"${character.quote}"</p>
                </div>` : ''}
            `;
        } else {
            detailContainer.innerHTML = "<p class='loading'>Error: Personaje no encontrado</p>";
        }
    } catch (error) {
        console.error("Error al obtener datos:", error);
        detailContainer.innerHTML = "<p class='loading'>Error al cargar los datos del personaje</p>";
    }
}

getCharacterDetail();
