
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredFood } from '../../utilities';
import Cart from '../SingleMeal/Cart/Cart';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meal = () => {
    const [search, setSearch] = useState('');
    const [meal, setMeal] = useState([]);
    const [cart, setCart] = useState([]);


    // For fetch meal data
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [search, cart]);

    // fetch meal data from local storage
    useEffect(() => {
        const storedFood = getStoredFood();
        const savedFood = [];
        for (const id in storedFood) {
            const addedFood = meal.find(food => food.idMeal === id);
            if (addedFood) {
                addedFood.quantity = storedFood[id]
                savedFood.push(addedFood);
            };
        };
        setCart(savedFood);
    }, [meal])


    const handleSearch = () => {
        const inputValue = document.getElementById('input-search');
        setSearch(inputValue.value);
        inputValue.value = '';
    }

    const handleAddToCart = (selectedFood) => {
        let newCart = [];
        const exist = cart.find(food => food.idMeal === selectedFood.idMeal);

        if (!exist) {
            selectedFood.quantity = 1;
            newCart = [...cart, selectedFood];
            setCart(newCart);

        } else {
            const rest = cart.filter(food => food.idMeal !== selectedFood.idMeal);
            selectedFood.quantity = selectedFood.quantity + 1;
            newCart = [...rest, selectedFood];
            setCart(newCart)
        }
        addToDb(selectedFood.idMeal);
    }

    return (
        <div className='mt-10'>
            <div className="meal-search-field text-center">
                <input onChange={(e) => setSearch(e.target.value)} id='input-search' className='border border-pink-500 w-96 pl-4 py-2 focus:outline-none' type="text" placeholder='Search Here' />
                <button onClick={handleSearch} className='px-6 py-2 border border-pink-500 bg-pink-500 text-white'>Search</button>
            </div>
            <div className='meal grid grid-cols-12'>
                <div className="meal col-span-9 grid grid-cols-3 gap-8 px-10 mt-12">
                    {meal.map(food => <SingleMeal
                        food={food}
                        key={food.idMeal}
                        handleAddToCart={handleAddToCart}>
                    </SingleMeal>)}
                </div>
                <div className="meal-cart col-span-3 h-screen w-[335px] top-[5%] sticky right-0"><Cart cart={cart}></Cart></div>
            </div>
        </div>
    );
};

export default Meal;