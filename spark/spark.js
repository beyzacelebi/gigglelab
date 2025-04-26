  const sounds = [
    "../assets/sounds/laugh1.mp3",
    "../assets/sounds/laugh2.mp3",
    "../assets/sounds/laugh3.mp3",
    "../assets/sounds/laugh4.mp3"
  ];
  
  async function generateJoke() {
    const jokeBox = document.getElementById('jokeBox');
    jokeBox.innerText = "Loading joke...";
  
    try {
      const response = await fetch('http://localhost:5000/get-joke');
      const data = await response.json();
      jokeBox.innerText = data.joke;
  
      // Şaka geldikten sonra rastgele kahkaha sesi çal
      playRandomLaugh();
    } catch (error) {
      console.error("Error fetching joke:", error);
      jokeBox.innerText = "Failed to load a joke!";
    }
  }
  
  function playRandomLaugh() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const laughSound = new Audio(sounds[randomIndex]);
    laughSound.play();
  }
  