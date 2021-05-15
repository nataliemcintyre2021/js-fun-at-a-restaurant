function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(name, price, type) {
  return (
    menuItem = {
      name: name,
      price: price,
      type: type
    });
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return
  } else {
   return ingredients.push(newIngredient);
 }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  var discount = (price * .10);
  var decreasedPrice = (price - discount);
  return decreasedPrice
};


function createRecipe(title, ingredients, menuItemType) {
  return (
    recipe = {
      title: title,
      ingredients: ingredients,
      type: menuItemType
    }
  )
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
