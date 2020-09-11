import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


const axiosPromise = axios.get("https://api.github.com/users/OzLievano")
      .then((r)=>{
        console.log(r.data);
        myGitHub(r.data);

      })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then((r)=>{
    myGitHub(r.data)
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function myGitHub(cardObj){
  let cards = document.querySelector('.cards');
  let card = document.createElement('div');
  card.classList.add('card');
  let cardImage = document.createElement('img');
  cardImage.src =cardObj.avatar_url;
  card.appendChild(cardImage);
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);
  let header3 = document.createElement('h3');
  header3.classList.add('name');
  header3.textContent = cardObj.name;
  let paraClass = document.createElement('p');
  paraClass.classList.add('username');
  let para1 =document.createElement('p');
  cardObj.location = "MIAMI";
  para1.textContent = `Location: ${cardObj.location}`;
  let para2 =document.createElement('p');
  para2.textContent = 'Profile: '
  let a1 = document.createElement('a');
  a1.href = cardObj.html_url;
  a1.textContent = cardObj.html_url;
  para2.appendChild(a1);

  cardInfo.appendChild(header3);
  cardInfo.appendChild(paraClass);
  cardInfo.appendChild(para1)
  cardInfo.appendChild(para2)

  let para3 = document.createElement('p');
  para3.textContent =`Followers: ${cardObj.followers}`;
  let para4 = document.createElement('p');
  para4.textContent =`Following: ${cardObj.following}`;
  let para5 = document.createElement('p');
  cardObj.bio = "I am the OZ MAN 5000 - robotic progammer newbie";
  para5.textContent =`Bio: ${cardObj.bio}`;

  cardInfo.append(para3,para4,para5);
  cards.appendChild(card)

  return cards ;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell

*/
