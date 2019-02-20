"use strict";

function watchSubmit() {
  $(".form").submit(event => {
    event.preventDefault();
    let userInput = $('input[type="number"]').val();
    generateDogImage(userInput);
  });
}

function generateDogImage(numberOfImages) {
  const url = `https://dog.ceo/api/breeds/image/random/${numberOfImages}`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => renderImages(responseJson))
    .catch(error => console.error(error));
}

function renderImages(responseJson) {
  let results = responseJson["message"].map(element => {
    return `<img src="${element}" alt="dog image" class="results-img" />`;
  });

  results.forEach(htmlString => $(".results").append(htmlString));
  $(".results").toggleClass("hidden");
}

// search by breed

function watchSubmitTwo() {
  $(".form-2").submit(event => {
    event.preventDefault();
    let userInput = $('input[type="text"').val();
    generateDogImageTwo(userInput);
  });
}

function generateDogImageTwo(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => renderImagesTwo(responseJson))
    .catch(error => console.error(error));
}

function renderImagesTwo(responseJson) {
  let results = `<img src="${
    responseJson.message
  }" alt="dog image" class="results-img" />`;

  $(".results-2").append(results);
  $(".results-2").toggleClass("hidden-2");
}

function renderForm() {
  watchSubmit();
  watchSubmitTwo();
}

$(renderForm);
