import { createContext, useContext, useState } from "react";

// কনটেক্সট তৈরি
const CartContext = createContext();

// প্রোভাইডার তৈরি
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// ১. প্রোডাক্ট যোগ করার লজিক
	const addToCart = (product) => {
		setCart((prevCart) => {
			// চেক করা হচ্ছে আইটেমটি ইতিমধ্যে আছে কি না
			const existingProduct = prevCart.find(
				(item) => item.id === product.id,
			);

			// যদি থাকে, তাহলে quantity বাড়ানো হবে
			if (existingProduct) {
				return prevCart.map(
					(item) =>
						item.id === product.id
							? { ...item, qty: item.qty + 1 } // quantity বাড়ানো
							: item, // অন্য আইটেম অপরিবর্তিত থাকবে
				);
			}

			// যদি না থাকে, তাহলে নতুন আইটেম যোগ করা হবে
			return [...prevCart, { ...product, qty: 1 }];
		});
	};

	return (
		// ২. addToCart ফাংশনটি ভ্যালু হিসেবে পাঠানো হলো
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

// কাস্টম হুক তৈরি (ব্যবহারের সুবিধার্থে)
export const useCart = () => {
	return useContext(CartContext);
};
