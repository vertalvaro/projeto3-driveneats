function selectDishes(select) {
  const unselect = document.querySelector(".dishes .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  dishName = document.querySelector(".dishes .selected h3").innerHTML;
  dishPrice = document
    .querySelector(".dishes .selected h4")
    .innerHTML.replace(/,/g, ".")
    .replace(/^.{3}/g, "");
  document.getElementById("firstItem").innerHTML = dishName;
  document.getElementById("firstPrice").innerHTML = dishPrice.replace(".", ",");
  checkOrderCondition();
}
let dishName;
let dishPrice;
function selectDrinks(select) {
  const unselect = document.querySelector(".drinks .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  drinkName = document.querySelector(".drinks .selected h3").innerHTML;
  drinkPrice = document
    .querySelector(".drinks .selected h4")
    .innerHTML.replace(/,/g, ".")
    .replace(/^.{3}/g, "");
  document.getElementById("secondItem").innerHTML = drinkName;
  document.getElementById("secondPrice").innerHTML = drinkPrice.replace(
    ".",
    ","
  );
  checkOrderCondition();
}
let drinkName;
let drinkPrice;
function selectDesserts(select) {
  const unselect = document.querySelector(".desserts .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  dessertName = document.querySelector(".desserts .selected h3").innerHTML;
  dessertPrice = document
    .querySelector(".desserts .selected h4")
    .innerHTML.replace(/,/g, ".")
    .replace(/^.{3}/g, "");
  document.getElementById("thirdItem").innerHTML = dessertName;
  document.getElementById("thirdPrice").innerHTML = dessertPrice.replace(
    ".",
    ","
  );
  checkOrderCondition();
}
let clientName;
let clientAdress;
let dessertName;
let dessertPrice;
function checkOrderCondition() {
  const selectedDish = document.querySelector(".dishes .selected");
  const selectedDrink = document.querySelector(".drinks .selected");
  const selectedDessert = document.querySelector(".desserts .selected");
  if (
    selectedDish !== null &&
    selectedDrink !== null &&
    selectedDessert !== null
  ) {
    const butao = document.querySelector("footer button");
    butao.classList.add("activated");
    butao.innerHTML = "Fechar pedido";
    butao.style.fontWeight = "700";
    butao.style.fontSize = "20px";
    butao.disabled = false;
    document.getElementById("total").innerHTML =
      "R$ " +
      (
        parseFloat(dishPrice) +
        parseFloat(drinkPrice) +
        parseFloat(dessertPrice)
      )
        .toFixed(2)
        .replace(".", ",");
  }
}
function showModal() {
  const show = document.querySelector(".modal");
  show.style.display = "flex";
  askName();
  askAdress();
  changeURL();
}
function hideModal() {
  const hide = document.querySelector(".modal");
  hide.style.display = "none";
}
function askName() {
  clientName = prompt("Digite seu nome");
}
function askAdress() {
  clientAdress = prompt("Digite seu endereço para entrega");
}
function changeURL() {
  const params = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: 
    - Prato: ${dishName} 
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$ ${(
      parseFloat(dishPrice) +
      parseFloat(drinkPrice) +
      parseFloat(dessertPrice)
    ).toFixed(2)}
    Nome: ${clientName}
    Endereço: ${clientAdress}`
  );
  const url = "https://wa.me/5511958174303?text=" + params;
  document.getElementById("link").href = url;
}
