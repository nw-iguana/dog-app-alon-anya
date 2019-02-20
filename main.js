"use strict";

function watchSubmit() {
  $(".form").submit(event => {
    event.preventDefault();
    const inputVal = $('input[type="number"').val();
    console.log(inputVal);
    getDogImage(inputVal);
  });
}

function getDogImage(imageAmount) {
  const url = `https://dog.ceo/api/breeds/image/random/${imageAmount}`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      renderImage(responseJson.message);
    })
    .catch(error => console.error("Error:", error));
}

function renderImage(url) {
  $(".results").append(`
  <img src="${url}" alt="dog image" class="results-img" />
  `);

  $(".results").toggleClass("hidden");
}

// search by breed

function watchSubmit() {
  $(".form-2").submit(event => {
    event.preventDefault();
    const inputVal = $('input[type="text"').val();
    console.log(inputVal);
    getBreedImage(inputVal);
  });
}

function getBreedImage(breedType) {
  const url = `https://dog.ceo/api/breed/${breedType}/images`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.message[0]);
      renderImageTwo(responseJson.message[0]);
    })
    .catch(error => console.error("Error:", error));
}

function renderImageTwo(url) {
  $(".results-2").append(`
  <img src="${url}" alt="dog image" class="results-img" />
  `);

  $(".results-2").toggleClass("hidden-2");
}

function renderForm() {
  watchSubmit();
  getDogImage();
  getBreedImage();
}

$(renderForm);
