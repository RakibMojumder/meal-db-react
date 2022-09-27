
// add meal db to local storage
const addToDb = (id) => {
    let mealDb = {};
    const storedDb = localStorage.getItem('meal-db');

    if (storedDb) {
        mealDb = JSON.parse(storedDb);
    };

    let quantity = mealDb[id];
    if (quantity) {
        mealDb[id] = quantity + 1;
    } else {
        mealDb[id] = 1;
    }


    localStorage.setItem('meal-db', JSON.stringify(mealDb));
}


// Get meal db form local storage
const getStoredFood = () => {
    let mealDb = {};
    const storedDb = localStorage.getItem('meal-db');

    if (storedDb) {
        mealDb = JSON.parse(storedDb);
    };
    return mealDb;
}


// remove item from Local storage
const removeItemFromLocalStorage = (id) => {
    const storedFood = getStoredFood();

    if (id in storedFood) {
        delete storedFood[id];
    }
    localStorage.setItem('meal-db', JSON.stringify(storedFood));
}


// clear local storage
const clearFromDb = () => {
    localStorage.clear();
}

export { addToDb, getStoredFood, clearFromDb, removeItemFromLocalStorage };