//function to random generate text color
function getRandomColor() {
  const colors = ['#2966A4', '#F1AB23', '#A72819', '#5CBFE6', '#57B9A5'];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

let h2Elements = document.querySelectorAll("h2");

h2Elements.forEach(x => {
  x.style.color = getRandomColor();
})

