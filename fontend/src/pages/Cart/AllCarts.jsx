import React from 'react';
import WishlistItem from './WishlistItem';

const AllCarts = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const removeFromCart = (itemId) => {
        // Retrieve the current cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Filter out the item to be deleted
        const updatedCartItems = cartItems.filter(cartItem => cartItem._id !== itemId);
        
        // Update the local storage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      };

    return (
        <div className='grid gap-4 grid-cols-2 m-4 items-center justify-center'>
            {cartItems.map((item) => (
                <WishlistItem key={item._id} removeFromCart={removeFromCart} item={item} />
            ))}
        </div>
    );
};

export default AllCarts;
