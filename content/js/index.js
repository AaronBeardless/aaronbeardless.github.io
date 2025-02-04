{
  const words = ["GAME-DEVELOPMENT", "MUSIC", "3D ART", "GENERALIST", "SOFTWARE-DEVELOPMENT"];
  let currentIndex = 0;

  function changeText() {
    const changingTextElements = document.getElementsByClassName("changing-text");

    Array.from(changingTextElements).forEach(function(element) {
      element.textContent = " // " + words[currentIndex];
    });

    currentIndex = (currentIndex + 1) % words.length;
  }

  setInterval(changeText, 4000);
}