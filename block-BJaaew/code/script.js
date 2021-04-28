let root = document.querySelector(".cards");
let rootTags = document.querySelector(".tags");

let activeHouse = "";

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allTags = got.houses.map((house) => house.name);

function createTagsUI(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.innerText = tag;

    if (activeHouse === tag) {
      li.classList.add("active");
    }
    li.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfHouse =
        got.houses.find((house) => house.name === tag).people || [];
      createcardsUI(peopleOfHouse);
      createTagsUI(allTags);
    });
    rootTags.append(li);
  });
}

function createcardsUI(data = []) {
  root.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    li.classList.add("card");
    let img = document.createElement("img");
    img.alt = people.name;
    img.src = people.image;
    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    let p = document.createElement("p");
    p.innerText = people.description;
    let button = document.createElement("button");
    button.innerText = "Know More!";
    li.append(img, h2, p, button);
    root.append(li);
  });
}

createcardsUI(allPeople);
createTagsUI(allTags);
{
  /* <li class="card">
<img
  src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
  ;
  alt="one"
/>
<h2>'Eddard "Ned" Stark'</h2>
<p>
  Lord of Winterfell - Warden of the North - Hand of the King -
  Married to Catelyn (Tully) Stark
</p>
<button>Know More!</button>
</li> */
}
