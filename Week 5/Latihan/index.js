// 4. Import dog env dari env.js

// Deklarasi
// 5. Deklarasi variable savedPetList dengan getItem dari localStorage
// Referensi : https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const savedPetList = ...
// 6. JSON parse savedPetList karena local storage menyimpan value string
const petList = ...

// 7. Buat instance untuk suatu search param (untuk pagination)
// Referensi:  https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams dengan parameter window location search saat ini
const searchParams = ...;
// 8. Ambil nilai dari suatu search param key bernama "page", default nilai = 1. Untuk pengesetan dilakukan dibawah dipoin 18
const currentPage = searchParams.get(...);


// API Call
// 9. Buat suatu fungsi bernama getBreedsImage untuk melakukan pemanggilan API 
// menggunakan async await
// API URL : {dog_env.endpoint}/v1/images/search
// Query param : 
// a. include_categories = true, 
// b. include_breeds = true,
// c. has_breeds = true, 
// d. order=sesuaikan nilai sortBy dari parameter fungsi
// e. page = sesuaikan nilai dari currentPage
// f. limit = 10
// Method : GET
// headers : menyesuaikan dengan documentasi yang disediakan
// 9a. set sortBy dengan nilai default ascending (check di API docs bagaimana nilai ascending dan descending di definisikan pada query parameter order)
const getBreedsImage = async (sortBy = ...) => {
  const response = ...
  return response.json();
};

// 10. Buat fungsi fetchImage untuk melakukan pemanggilan fungsi getBreedsImage sesuai sortBy yang dikirim
// supaya nilainya lebih dinamis
const fetchImage = (sortBy) =>{
  // 10a. panggil fungsi getBreedsImage berisi parameter sortBy dengan menggunakan promise then. 
  // ketika resolve, maka set nilai ke localstorage dengan pasangan key: petList dan value: hasil nilai yang diresolve (jangan lupa valuenya di JSON.stringify)
  // 10b. panggil fungsi render component (seperti pertemuan sebelumnya) dengan parameter value
}

fetchImage();

// 11. Definisikan selector untuk dropdown menu, search form dan search input element
const dropdownElement = ...
const formElement = ...
const searchInputElement = ...

// pagination
// 12. Definisikan selector untuk pagination
const prevPage = ...
const pageOne = ...
const pageTwo = ...
const pageThree = ...
const nextPage = ...


// 13. Buat fungsi bernama petCardComponent untuk me render nilai dari hasil fetch data di endpoint
const PetCardComponent = (pet) => {
  // 13a. tampilkan nilai dari breeds dari array ke 0
  // 13b. tampilkan hasil nilai dibawah ini sesuai dengan response yang didapatkan
  return `<div class="card my-3 mx-2" style="width: 20%">
    <img height="300" style="object-fit: cover" class="card-img-top" src=${...} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title d-inline">${...}</h5>
      <p class="card-text">
        ${...}
      </p>
      <p>${...}</p>
      <span class="badge badge-pill badge-info">${...}</span>
      <span class="badge badge-pill badge-warning">Weight: ${...}</span>
      <span class="badge badge-pill badge-danger">Height: ${...}</span>
    </div>
  </div>`;
};

const renderComponent = (filteredPet) => {
  document.querySelector(".petInfo").innerHTML = filteredPet
    .map((pet) => PetCardComponent(pet))
    .join("");
};

// 14. buat fungsi sortPetById sesuai dengan key yang dipilih
const sortPetById = (key) => {
  if (key === "ascending") {
   // panggil fungsi fetchImage dengan nilai yang ditentukan pada dokumentasi API sama pada poin 9a.
  }
  if (key === "descending") {
     // panggil fungsi fetchImage dengan nilai yang ditentukan pada dokumentasi API sama pada poin 9a.
  }
};

// 15. searchPetByKey digunakan untuk melakukan search tanpa memanggil API, tetapi langsung
// dari nilai petList
const searchPetByKey = (key) => {
  // 15a. mengembalikan filter dari petList sesuai dengan key yang diketikkan
  return ...
};

dropdownElement.addEventListener("change", (event) => {
  // 16. Buat fungsi untuk sorting
  event.preventDefault();
  const value = ...;
  // 16a. Panggil fungsi sort dengan parameter value diatas
});

formElement.addEventListener("submit", (event) => {
  // 17. Buat fungsi untuk melakukan search
  event.preventDefault();
  const value = ...;
  const filteredPet = ...;
  // 17a. panggil fungsi untuk merender komponen dengan parameter:
  // - filteredPet : ketika length filteredPet lebih dari 0
  // - petList: ketika length filteredPet = 0
  renderComponent(filteredPet.length > 0 ? filteredPet : petList);
});

// 18. FUngsi redirectTo untuk pagination
const redirectTo = (page) => {
  // 18a. set searchparam "page" dengan nilai parameter page diatas
  searchParams.set(...);
  // 18b. redirect dengan search param yang sudah didefinisikan
  window.location.search = ...;
};

prevPage.addEventListener("click", (event) => {
  event.preventDefault();
// 19. jika currentPage > 1 redirect ke current page - 1 (jangan lupa parameter di parse ke number)
// dengan memanggil fungsi redirect To, else redirect ke halaman 1
});

pageOne.addEventListener("click", (event) => {
  event.preventDefault();
  // 20. memanggil fungsi redirectTo ke halaman 1
});

pageTwo.addEventListener("click", (event) => {
  event.preventDefault();
  // 21. memanggil fungsi redirectTo ke halaman 2
});

pageThree.addEventListener("click", (event) => {
  event.preventDefault();
  // 22. memanggil fungsi redirectTo ke halaman 3
});

nextPage.addEventListener("click", (event) => {
  event.preventDefault();
  // 23. memanggil redirectTo ke page currentPage + 1 (jangan lupa diparse jadi number)
});
