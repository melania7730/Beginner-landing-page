function pawLovers() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let choice = prompt(
    "Please type 1 if you are more a DOG person\nAnd type 2 if you are more a cat person"
  );
  if (choice === "1") {
    alert(
      "Woof!Woof! 🐶🐶🐶\nThank you " +
        name +
        " for stopping by ❤️\nWe will be in touch by email 📧\nMeanwhile, have a pawsome day! 🐾🐾🐾"
    );
  } else {
    alert(
      "Meooooowww 😻😻😻.\nThank you " +
        name +
        " for stopping by ❤️\nWe will be in touch by email 📧\nMeanwhile, have a pawsome day! 🐾🐾🐾"
    );
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", pawLovers);
