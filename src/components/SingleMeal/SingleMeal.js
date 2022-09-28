
import Modal from '../Modal/Modal';

const SingleMeal = ({ food, handleAddToCart }) => {
    const { strMeal, strMealThumb, strInstructions, strCategory } = food;
    // console.log(strCategory)
    return (
        <div>
            <div className='border rounded-md h-[445px] relative' data-aos="zoom-in" data-aos-duration="1000">
                <div className="meal-img">
                    <img src={strMealThumb} alt="" className='rounded-tr-md h-[288px]' />
                </div>
                <div className="meal-details py-5">
                    <h1 className='pl-3'>Name: <span className='text-xl'>{strMeal.length > 20 ? strMeal.slice(0, 20) : strMeal}</span></h1>
                    <h1 className='pl-3 mb-16'>Category: {strCategory}</h1>
                    <div className='w-full flex justify-evenly absolute bottom-5'>
                        <button onClick={() => handleAddToCart(food)} className='bg-yellow-500 text-white px-6 py-2 rounded-full'>Add To Cart</button>
                        <label htmlFor="my-modal-3" className='bg-pink-500 text-white px-6 py-2 rounded-full'>View Details</label>
                    </div>
                </div>
            </div>
            <Modal img={strMealThumb} instructions={strInstructions}></Modal>
        </div>
    );
};

export default SingleMeal;