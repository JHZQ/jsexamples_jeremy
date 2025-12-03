// storing objects inside an object
const arrCategories = new Array( // instantiating a new Array object
    { name: "Cat A", description: "Cars below 1600cc" },          // object 1
    { name: "Cat B", description: "Cars above 1600cc" },          // object 2
    { name: "Cat C", description: "Goods Vehicles and Buses" },   // object 3
);

// access arrCategories' length property
console.log(arrCategories.length);

// access arrCategories' index 0's property
console.log(arrCategories[0].name, arrCategories[0].description);
console.log(`You have a ${arrCategories[0].name} car that belongs to ${arrCategories[0].description}`);

// print out all categories' name and description using for loop
for (let i = 0; i < arrCategories.length; i++) {
    console.log(arrCategories[i].name, arrCategories[i].description);
}

// adds new item to array's end
arrCategories.push({name: "Cat E", description: "Open"});

// print out all categories' name and description using forEach method
arrCategories.forEach((element) => {
    console.log(element.name, element.description)
});
