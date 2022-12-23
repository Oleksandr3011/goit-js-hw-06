// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const array = ingredients.map(ingredient => {

  const li = document.createElement('li');

  const name = document.createElement('p');

  name.textContent = ingredient;
  li.classList.toggle('item');
  li.appendChild(name);

  return li;
});

list.append(...array)
  
console.log(list);