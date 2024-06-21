var baseURL = 'https://rickandmortyapi.com/api';

document.getElementById('getAllCharacters').addEventListener('click', getAllCharacters);
document.getElementById('filterCharacters').addEventListener('click', filterCharacters);

// Función para Obtener Todos los Personajes
async function getAllCharacters() {
    try {
        displayError("")
        var response = await fetch(`${baseURL}/character`);
        var data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        displayError(error.message);
    }
}

// Función para Filtrar Personajes
async function filterCharacters() {
    var name = document.getElementById('nameInput').value;
    var status = document.getElementById('statusInput').value;
    var species = document.getElementById('speciesInput').value;
    var type = document.getElementById('typeInput').value;
    var gender = document.getElementById('genderInput').value;

    var url = `${baseURL}/character/?`;

    if (name) {
        url += `name=${name}&`
    };
    if (status) {
        url += `status=${status}&`
    };
    if (species) {
        url += `species=${species}&`
    };
    if (type) {
        url += `type=${type}&`
    };
    if (gender) {
        url += `gender=${gender}&`
    };

    if (name || status || species || type || gender) {
        try {
            displayError("")
            const response = await fetch(url);
            const data = await response.json();
            displayCharacters(data.results);
        } catch (error) {
            displayError(error.message);
        }
    }
}

// Función para Mostrar Personajes
function displayCharacters(characters) {
    var charactersList = document.getElementById('charactersList');
    charactersList.innerHTML = '';
    characters.forEach(character => {
        var characterElement = document.createElement('div');
        characterElement.textContent = `${character.name} - ${character.status} - ${character.species}`;
        charactersList.appendChild(characterElement);
    });
}

// Función para Mostrar Mensajes de Error
function displayError(message) {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}
