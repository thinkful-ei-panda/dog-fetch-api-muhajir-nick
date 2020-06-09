
//this is event listener
function watchForm() {
  $('form').submit((event) => {
    event.preventDefault();
    const userInput = $("input[type=text]").val();
    console.log(userInput);
    getDogImage(userInput);
  });
}

//this is fetch
function getDogImage(breed) {
  // fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)

    .then(response => response.json())
    .then(responseJson =>
      // console.log(responseJson));
      // generateRandomImages(responseJson));
      generateRandomByBreed(responseJson))
    .catch(error => alert('dog breed not found'));
}


function generateRandomByBreed(responseJson) {
  let imageUrl = responseJson.message;
  let imageHtml = `<img src="${imageUrl}" alt="Random Dog Image">`;

  $('.images').html(imageHtml);
}

// Generates random dog images into DOM
// function generateRandomImages(responseJson) {
//   let imageHtml = ``;
//   responseJson.message.forEach(imageURL => {
//   imageHtml += `
//   <section>
//     <img src="${imageURL}" alt="Random Dog Image">
//   </section>`;
//   });
//   $('.images').html(imageHtml);
// }


//render function

$(watchForm);
