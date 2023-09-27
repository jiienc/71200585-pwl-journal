import petList from "./pet.js";

const dropdownElement = document.querySelector(".dropdownMenu");
const formElement = document.querySelector(".searchForm");
const searchInputElement = document.querySelector(".searchInput");
const PetCardComponent = (pet) => {
  return `<div class="card my-3 mx-2" style="width: 20%">
    <img height="300" style="object-fit: cover" class="card-img-top" src=${
      pet.photo.full
  } alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title d-inline">${pet.name}</h5>
      <span class="badge badge-pill badge-info">${pet.type}</span>
      <p class="card-text">
        ${pet.description}
      </p>
      <p><small>Published at: ${new Date(pet.published_at)}</small></p>
      <button
        type="button"
        class="btn btn-secondary"
        data-toggle="modal"
        data-target="#confirmationModal"
      >
        Adopt Me
      </button>
    </div>
  </div>`;
};

const renderComponent = (filteredPet) => {
  document.querySelector(".petInfo").innerHTML = filteredPet
      .map((pet) => PetCardComponent(pet))
      .join("");
};

renderComponent(petList);

const sortPetById = (key) => {
  if (key === "oldest") {
    return petList.sort((a, b) => {
      const keyA = new Date(a.published_at);
      const keyB = new Date(b.published_at);
      if (keyA > keyB) return 1;
      if (keyA < keyB) return -1;
      return 0;
    });
  }
  if (key === "newest") {
    return petList.sort((a, b) => {
      const keyA = new Date(a.published_at);
      const keyB = new Date(b.published_at);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }
  if (key === "name") {
    return petList.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
};

const searchPetByKey = (key) => {
  return petList.filter((pet) => pet.name.toLowerCase() === key.toLowerCase());
};

dropdownElement.addEventListener("change", (event) => {
  event.preventDefault();
  const value = event.target.value;
  const filteredPet = sortPetById(value);
  renderComponent(filteredPet);
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = searchInputElement.value;
  const filteredPet = searchPetByKey(value);
  renderComponent(filteredPet.length > 0 ? filteredPet : petList);
});