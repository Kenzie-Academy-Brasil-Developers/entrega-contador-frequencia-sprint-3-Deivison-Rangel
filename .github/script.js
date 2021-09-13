
const button = document.getElementById("countButton");

button.addEventListener("click", function () {
  
   countLetters();
  
   countWords();

});

const countLetters = () => {
   
  let typedText = document.getElementById("textInput").value;
  
  typedText = typedText.toLowerCase();
  
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  const letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    
   currentLetter = typedText[i];

    if (letterCounts[currentLetter] === undefined) {
      
      letterCounts[currentLetter] = 1;
    
   } else {

      letterCounts[currentLetter]++;
    }
  }

   for (let letter in letterCounts) {

    const span = document.createElement("span");

    const textContent = `"${letter}": ${letterCounts[letter]}, `;

    span.innerText = textContent;

    const letters = document.getElementById("lettersDiv");

    letters.appendChild(span);

  }
};

const countWords = () => {

  let typedText = document.getElementById("textInput").value;

  typedText = typedText.toLowerCase();

  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  words = typedText.split(/\s/);

  const wordsCounts = {};

   for (let i = 0; i < words.length; i++) {

    currentWord = words[i];

    if (wordsCounts[currentWord] === undefined) {

      wordsCounts[currentWord] = 1;

    } else {

      wordsCounts[currentWord]++;
    }
  }

   for (let word in wordsCounts) {

    const span = document.createElement("span");

    const textContent = `"${word}": ${wordsCounts[word]}, `;

    span.innerText = textContent;

    const words = document.getElementById("wordsDiv");

    words.appendChild(span);

  }
};