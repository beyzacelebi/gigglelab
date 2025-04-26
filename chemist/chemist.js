function submitJoke() {
    const userInput = document.getElementById('userJoke').value.trim();
    if (userInput !== "") {
      document.getElementById('submittedJoke').innerText = userInput;
      document.getElementById('userJoke').value = "";
    } else {
      alert("Please write a joke first!");
    }
  }
  