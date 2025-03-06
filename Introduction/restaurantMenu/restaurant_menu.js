const mainCourseMenu = ['Steak - $14.5', 'Pasta - $15.3', 'Burger - $10.5', 'Salmon - $15.8'];
const dessertMenu = ['Cake - $4', 'Ice Cream - $5', 'Pudding - $6', 'Fruit Salad - $5'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

const breakfastMenuItemsHTML = breakfastMenu
    .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;