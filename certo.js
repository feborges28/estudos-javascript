let millionLoop = 100;

//EVENTO QUE CAPTA O ELEMENTO ATUAL QUE FOI CLICADO
document.body.addEventListener("click", (e) => {
  console.log("target atual", e.target)
})

//https://dev.to/ibn_abubakre/document-fragments-and-why-you-should-use-them-14fk
//DOCUMENT FRAGMENT - ABORDAGEM PARA OTIMIZAR A PERFORMANCE
//EVITANDO O REFLOW DA DOM A CADA APPEND DE UM NOVO NÓ
let fragment = document.createDocumentFragment();

for(let i = 0; i < millionLoop; i++){
  let span = document.createElement("span");
  span.innerHTML = i;
  //AQUI ACONTECE A MÁGICA PARA EVITAR OS SIDE EFFECTS DE RENDERING
  fragment.append(span);
}

document.body.appendChild(fragment);

let finishedContent = document.createElement("h1");
finishedContent.innerHTML = "Terminou";
document.body.appendChild(finishedContent);