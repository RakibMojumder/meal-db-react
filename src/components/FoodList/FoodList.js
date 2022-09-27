import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeItemFromLocalStorage } from '../../utilities';
const FoodList = ({ item: { idMeal, strMeal, quantity } }) => {
    return (
        <tr>
            <th className='w-[300px]'>{strMeal.length > 14 ? strMeal.slice(0, 14) : strMeal}</th>
            <td className='text-center'>{quantity}</td>
            <td className='text-center text-red-500' onClick={() => removeItemFromLocalStorage(idMeal)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></td>
        </tr>
    );
};

export default FoodList;