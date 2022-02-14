import { LightningElement } from "lwc";

export default class App extends LightningElement {
  /*
  Object JavaScript:

  {key:value, key1:valeu1, key2:value2, ...}
  * nameOject = {
      key:valeu,
      key1:valeu1,
      key2:valeu2,
      ...
    };

    
    para acessar valores das keys:
      nomeObject.key

      Ex:
        pessoa.nome
        pessoa.status

  */

  pessoa = {
    nome:"Prandini",
    tel: "8899",
    idade: 29,
    status: true
  };

  /* Lista de Objeto  */
  pokemons = [
    {cod:1, nome: "Picachu", tipo:"raio", nivel:52},
    {cod:2, nome: "Charmander", tipo:"fogo", nivel:60},
    {cod:3, nome: "Bulbassauro", tipo:"planta", nivel:35},
    {cod:4, nome: "Charmander", tipo:"fogo", nivel:70},
    {cod:5, nome: "Mew", tipo:"psiquico", nivel:99}
  ]

   /* Criar uma lista objetos com valores
   relacionadas a personagens Carvena do dragão  
   
   nome, arma, força, agilidade, inteligência, estamina
   */

  caverDragao = [
    {cod:1, nome: "Hank", arma: "Arco", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:2, nome: "Eric", arma: "Escudo", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:3, nome: "Bobby", arma: "Tacape", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:4, nome: "Sheila", arma: "Capa", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:5, nome: "Presto", arma: "Chapéu", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:6, nome: "Diana", arma: "Bastão", forca: 3, agilidade: 9, inteligência: 7, estamina: 5},
    {cod:7, nome: "Mestre dos Magos", arma: "Oculta", forca: 3, agilidade: 9, inteligência: 7, estamina: 5}
  ]

}
