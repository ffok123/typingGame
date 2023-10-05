const quotes = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grapefruit",
  "honeydew",
  "imbe",
  "jackfruit"
  ];
  
  let timer;
  let startTime;
  let endTime;
  let currentIndex = 0;
  
  function startGame() {
    document.getElementById("inputBox").disabled = false;
    document.getElementById("inputBox").value = "";
    document.getElementById("quote").textContent = quotes[currentIndex];
    document.getElementById("inputBox").focus();
  
    startTime = new Date();
    timer = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    const currentTime = new Date();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${timeElapsed} seconds`;
  }
  
  document.getElementById("inputBox").addEventListener("input", function() {
    const quote = document.getElementById("quote").textContent;
    const typedText = document.getElementById("inputBox").value;
  
    if (typedText === quote) {
      currentIndex++;
      if (currentIndex >= quotes.length) {
        endGame();
      } else {
        document.getElementById("quote").textContent = quotes[currentIndex];
        document.getElementById("inputBox").value = "";
      }
    }
  });
  
  function endGame() {
    clearInterval(timer);
    document.getElementById("inputBox").disabled = true;
    endTime = new Date();
    const totalTime = Math.floor((endTime - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${totalTime} seconds. Game Over!`;
  }