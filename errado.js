let millionLoop = 100;


console.log(Date.now());
for(let i = 0; i < millionLoop; i++){
  let span = document.createElement("span");
  span.innerHTML = i;
  span.addEventListener("click", () => {
    console.log("clicou no span " + i);
  })
  document.body.appendChild(span)
}
console.log(Date.now());

let finishedContent = document.createElement("h1");
finishedContent.innerHTML = "Terminou";
document.body.appendChild(finishedContent);