
document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('currentyear').textContent = year;
    document.getElementById('lastdatemodified').textContent = document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-container');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});


function calculateFoodSupply() {
    const persons = document.getElementById('persons').value;
    const timePeriod = document.getElementById('timePeriod').value;

    if (persons <= 0 || !timePeriod) {
        alert("Please enter valid inputs.");
        return;
    }

    const periodFactor = timePeriod / 12; // Calculate fraction of the year
    const valuesPerYear = {
        wheat: 200,
        flour: 30,
        rice: 70,
        oats: 30,
        pasta: 30,
        corn_meal: 30,
        meats: 20,
        shortening: 4,
        oil: 3,
        dry_beans: 40,
        soy_beans: 10,
        lentils: 5,
        soup: 5,
        dry_milk: 72,
        can_milk: 15,
        sugar: 3,
        honey: 3,
        jams: 3,
        molasses: 1,
        juice: 6,
        salt: 5,
        baking_powder: 1,
        baking_soda: 1,
        yeast: 1,
        vinegar: 1,
        canned_fruits: 320,
        dry_fruits: 90,
        water: 183,
        bleach: 1
    };

    const result = {
        wheat: (valuesPerYear.wheat * periodFactor * persons).toFixed(2),
        flour: (valuesPerYear.flour * periodFactor * persons).toFixed(2),
        rice: (valuesPerYear.rice * periodFactor * persons).toFixed(2),
        oats: (valuesPerYear.oats * periodFactor * persons).toFixed(2),
        pasta: (valuesPerYear.pasta * periodFactor * persons).toFixed(2),
        corn_meal: (valuesPerYear.corn_meal * periodFactor * persons).toFixed(2),
        meats: (valuesPerYear.meats * periodFactor * persons).toFixed(2),
        shortening: (valuesPerYear.shortening * periodFactor * persons).toFixed(2),
        oil: (valuesPerYear.oil * periodFactor * persons).toFixed(2),
        dry_beans: (valuesPerYear.dry_beans * periodFactor * persons).toFixed(2),
        soy_beans: (valuesPerYear.soy_beans * periodFactor * persons).toFixed(2),
        lentils: (valuesPerYear.lentils * periodFactor * persons).toFixed(2),
        soup: (valuesPerYear.soup * periodFactor * persons).toFixed(2),
        dry_milk: (valuesPerYear.dry_milk * periodFactor * persons).toFixed(2),
        can_milk: (valuesPerYear.can_milk * periodFactor * persons).toFixed(2),
        sugar: (valuesPerYear.sugar * periodFactor * persons).toFixed(2),
        honey: (valuesPerYear.honey * periodFactor * persons).toFixed(2),
        jams: (valuesPerYear.jams * periodFactor * persons).toFixed(2),
        molasses: (valuesPerYear.molasses * periodFactor * persons).toFixed(2),
        juice: (valuesPerYear.juice * periodFactor * persons).toFixed(2),
        salt: (valuesPerYear.salt * periodFactor * persons).toFixed(2),
        baking_powder: (valuesPerYear.baking_powder * periodFactor * persons).toFixed(2),
        baking_soda: (valuesPerYear.baking_soda * periodFactor * persons).toFixed(2),
        yeast: (valuesPerYear.yeast * periodFactor * persons).toFixed(2),
        vinegar: (valuesPerYear.vinegar * periodFactor * persons).toFixed(2),
        canned_fruits: (valuesPerYear.canned_fruits * periodFactor * persons).toFixed(2),
        dry_fruits: (valuesPerYear.dry_fruits * periodFactor * persons).toFixed(2),
        water: (valuesPerYear.water * periodFactor * persons).toFixed(2),
        bleach: (valuesPerYear.bleach * periodFactor * persons).toFixed(2)
    };

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p id="food-supply-title"><strong>Food Supply Needed</strong></p>
        <p><strong>Grains:</strong></p>
        <p>Wheat: ${result.wheat} Lbs</p>
        <p>Flour: ${result.flour} Lbs</p>
        <p>Rice: ${result.rice} Lbs</p>
        <p>Oats: ${result.oats} Lbs</p>
        <p>Pasta: ${result.pasta} Lbs</p>
        <p>Corn Meal: ${result.corn_meal} Lbs</p>
        <p><strong>Canned or Dried Meats:</strong></p>
        <p>Meats: ${result.meats} Lbs</p>
        <p><strong>Fats and Oils:</strong></p>
        <p>Shortening: ${result.shortening} Lbs</p>
        <p>Vegetable Oil: ${result.oil} Gallons</p>
        <p><strong>Beans and Legumes:</strong></p>
        <p>Dry Beans: ${result.dry_beans} Lbs</p>
        <p>Soy Beans: ${result.soy_beans} Lbs</p>
        <p>Lentils: ${result.lentils} Lbs</p>
        <p>Dry Soup Mix: ${result.soup} Lbs</p>
        <p><strong>Milk and Dairy:</strong></p>
        <p>Dry Milk: ${result.dry_milk} Lbs</p>
        <p>Can Milk: ${result.can_milk} Cans</p>
        <p><strong>Sugars:</strong></p>
        <p>Sugar: ${result.sugar} Lbs</p>
        <p>Honey: ${result.honey} Lbs</p>
        <p>Jams: ${result.jams} Lbs</p>
        <p>Molasses: ${result.molasses} Lbs</p>
        <p>Powdered Juice Mix: ${result.juice} Lbs</p>
        <p><strong>Cooking Essentials:</strong></p>
        <p>Salt: ${result.salt} Lbs</p>
        <p>Baking Powder: ${result.baking_powder} Lbs</p>
        <p>Baking Soda: ${result.baking_soda} Lbs</p>
        <p>Yeast: ${result.yeast} Lbs</p>
        <p>Vinegar: ${result.vinegar} Gallons</p>
        <p><strong>Fruits and Vegetables:</strong></p>
        <p>Canned Fruits: ${result.canned_fruits} qts</p>
        <p>Dried Fruits: ${result.dry_fruits} Lbs</p>
        <p><strong>Water Storage:</strong></p>
        <p>Water: ${result.water} Gallons</p>
        <p>Bleach: ${result.bleach} Gallons</p>
    `;


    // Change the color of the "Food Supply Needed" paragraph
const titleParagraph = document.getElementById('food-supply-title');
titleParagraph.style.color = '#020080'; // Set the color to Navy
}