let string = "Felipe";
let numero = 31;
let lista = [0,1,2,3,4];
let objeto = {
  propriedade: 45
}
let booleano = true;
let map = new WeakMap();
let mapset = new WeakSet();
let funcao = function(){}

var Person = function(name, age, weight){
  this.age = age;
  this.name = name;
  this.weight = weight;

  //Arrow functions atribuem this ao contexto onde estão inscritas
  const contextoLexico = () =>{
    return this;
  }

  //Funções comuns são atribuídas ao contexto onde são executadas
  function contextoGlobal(){
    return this;
  }

  this.meuMetodoLexico = function (){
    return contextoLexico();
  }

  this.meuMetodoGlobal = function (){
    return contextoGlobal();
  }
}

var pessoa = new Person("Fausto Silva", 55, 99);
console.log(pessoa.meuMetodoLexico());
console.log(pessoa.meuMetodoGlobal());