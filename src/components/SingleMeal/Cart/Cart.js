import React from 'react';
import { clearFromDb } from '../../../utilities';
import FoodList from '../../FoodList/FoodList';

const Cart = ({ cart }) => {

    return (
        <div className="overflow-auto rounded-md">
            <table className="table w-full border">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => <FoodList item={item}></FoodList>)}
                </tbody>
            </table>

            <div className="clear-btn text-center mt-6 mb-4">
                <button onClick={clearFromDb} className='px-6 rounded-full py-2 border border-pink-500 bg-pink-500 text-white'>CLEAR ALL</button>
            </div>
        </div>
    );
};

export default Cart;