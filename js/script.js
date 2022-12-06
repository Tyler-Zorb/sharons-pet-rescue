const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, //scale form 1 (refreshed) to 10 (exhausted)
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };

  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep(); //calling the sleep method to see if it works.
//baxter.play(); //calling the play method to see if it works.

//console.log(clover, baxter); // logging out clover and baxter. Notice that the isTired value changed for each based on them playing or not.

clover.isTired = 8; //chaning the value of how tired clover is
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`; // the span with class of "pet-name" changes the folor pf the pet's name
    pets.append(li); // append the li variable to the pets element
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets); //calling the showPets function and passing the allPets array as an argument to the function.
});
