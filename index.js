
//this is event listener
function watchForm() {
  $('form').submit((event) => {
    event.preventDefault();
    const userInput = $("input[type=number]").val();
    console.log(userInput);
    getDogImage(userInput);
  });
}

//this is fetch
function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson =>
      console.log(responseJson));
}

$(watchForm);
