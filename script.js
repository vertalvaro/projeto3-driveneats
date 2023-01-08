function selectDishes(select) {
  const unselect = document.querySelector(".dishes .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  checkOrderCondition();
}
function selectDrinks(select) {
  const unselect = document.querySelector(".drinks .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  checkOrderCondition();
}
function selectDesserts(select) {
  const unselect = document.querySelector(".desserts .selected");
  if (unselect !== null) {
    unselect.classList.remove("selected");
  }
  select.classList.add("selected");
  checkOrderCondition();
}
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
  }
}
function showModal() {
  const show = document.querySelector(".modal");
  show.style.display = "flex";
}
function hideModal() {
  const hide = document.querySelector(".modal");
  hide.style.display = "none";
}
