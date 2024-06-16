const categoryItems = document.querySelectorAll('#categories .item');
const categoryQuantity = categoryItems.length;

console.log(`Number of categories: ${categoryQuantity}`);

categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});