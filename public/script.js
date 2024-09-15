// 1. Get the value the user typed into the search input. DONE
// 2. Search the foods array to find a match.  DONE
// 3. If a match is found:
//     - Display the name, advantages, and disadvantages of the food. DONE
// 4. If no match is found, display "Food not found." DONE
const foods = [
    {
        name: "Apple",
        advantages: [
            "Rich in antioxidants",
            "High in fiber",
            "May lower risk of heart disease"
        ],
        disadvantages: [
            "May cause digestive issues if consumed in excess",
            "Contains pesticides if not organic"
        ]
    },
    {
        name: "Chicken",
        advantages: [
            "High in protein, essential for muscle growth",
            "Rich in vitamins and minerals like B6, B12, and zinc",
            "Low in fat (especially skinless)",
            "Supports bone health and immune function"
        ],
        disadvantages: [
            "May contain antibiotics or hormones if not organic",
            "High consumption of processed chicken can increase sodium intake",
            "Risk of foodborne illnesses like salmonella if undercooked"
        ]
    }
]

// const searchFood = document.querySelector("#searchInput");
// const searchButton = document.querySelector("#searchButton");
// const result = document.querySelector("#result");
// searchButton.addEventListener('click', () => {
// const searchInput = searchFood.value.toLowerCase();
// if (searchFood) {
//     const foundFood = foods.find(food => food.name.toLowerCase()==searchInput)
//     if (foundFood) {
//        const foodResult = document.createElement("div");
//        result.appendChild(foodResult);
// foodResult.textContent = `Name: ${foundFood.name}\nAdvantages: ${foundFood.advantages}\nDisadvantages: ${foundFood.disadvantages}`
//     }
//     }
// });

const searchinputElement = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const result = document.querySelector("#result");
function searchFood() {
    const searchInputValue = searchinputElement.value.toLowerCase();
    const foundFood = foods.find(food => food.name.toLowerCase()==searchInputValue);
    result.innerHTML = '';
    if (foundFood) {
       const foodItem = document.createElement("div");
       foodItem.className="food-items";
foodItem.innerHTML = 
`<h2>${foundFood.name}</h2>
<div class = "advantages">
<h3> Advantages </h3>
<ul>${foundFood.advantages.map(adv => 
`<li>${adv}</li>`).join("") }
</ul>
</div>
<div class = "disadvantages">
<h3> Disadvantages </h3>
<ul>${foundFood.disadvantages.map(dis => 
    `<li>${dis}</li>`).join("") }
    </ul>
</div>`; 
result.appendChild(foodItem);}
else {
    result.textContent="Page not found";
}
    }
searchButton.addEventListener('click',searchFood);
searchInputElement.addEventListener('keypress',(e) => {
if(e.key === "Enter") {
    searchFood();
}
});