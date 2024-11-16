window.addEventListener('load', function() {
  fetch('https://bobsburgers-api.herokuapp.com/characters/')
    .then(response => response.json())
    .then(data => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      const randomCharacters = shuffled.slice(0, 20);
      
      const characterList = document.querySelector('.character-list');
      randomCharacters.forEach(character => {
        characterList.innerHTML += `
          <li class="message">
            <span>${character.name}</span>
            <span><i class="fa fa-heart" aria-hidden="true"></i></span>
          </li>
        `;
      });
      initializeEventListeners();
    })
    .catch(error => console.error('Error:', error));
});

function initializeEventListeners() {
  let heart = document.getElementsByClassName("fa-heart");
  let trash = document.getElementsByClassName("fa-trash-o");

  Array.from(heart).forEach(function(element) {
        element.addEventListener('click', function(){
          const name = this.parentNode.parentNode.childNodes[1].innerText
          fetch('favorites', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
            })
          })
          .then(response => {
            if (response.ok) return response.json()
          })
          .then(data => {
            console.log(data)
            window.location.reload(true)
          })
        });
  });

  Array.from(trash).forEach(function(element) {
        element.addEventListener('click', function(){
          const name = this.parentNode.parentNode.childNodes[1].innerText
          fetch('favorites', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'name': name,
            })
          }).then(function (response) {
            window.location.reload()
          })
        });
  });
}
initializeEventListeners();
