// Animation //
let words = document.querySelectorAll(".word")
words.forEach(word => {
  let letters = word.textContent.split("")
  word.textContent = ""
  letters.forEach(letter => {
    let span = document.createElement("span")
    span.textContent = letter
    span.className = "letter"
    word.append(span)
  })
})

let currentWordIndex = 0
let maxWordIndex = words.length - 1
words[currentWordIndex].style.opacity = "1"

let rotateText = () => {
  let currentWord = words[currentWordIndex]
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out"
    }, i * 80)
  })
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1"
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind"
    setTimeout(() => {
      letter.className = "letter in"
    }, 340 + i * 80)
  })
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
}

rotateText()
setInterval(rotateText, 4000)


// Back to top button
let mybutton = document.getElementById("topbutton");
                
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 180) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Website visit counter
var counterContainer = document.querySelector(".counter");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;