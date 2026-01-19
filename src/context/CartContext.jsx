import { createContext, useContext, useState, useEffect } from "react";

// কনটেক্সট তৈরি
const CartContext = createContext();

// প্রোভাইডার তৈরি
export const CartProvider = ({ children }) => {
	// const [cart, setCart] = useState([]);

	// ১. ইনিশিয়াল লোড
	const [cart, setCart] = useState(() => {
		// লোকাল স্টোরেজ থেকে কার্ট ডেটা লোড করা হচ্ছে
		const storedCart = localStorage.getItem("cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	// ২. কার্ট আপডেট হলে লোকাল স্টোরেজে সেভ করা
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]); // যখনই cart পরিবর্তন হবে, এই ইফেক্ট রান করবে

	// প্রোডাক্ট যোগ করার লজিক
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

	// নির্দিষ্ট আইটেম রিমুভ করার ফাংশন
	const removeFromCart = (productId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	};

	// পুরো কার্ট খালি করার ফাংশন
	const clearCart = () => {
		setCart([]);
	};

	return (
		// নতুন ফাংশনগুলো ভ্যালু হিসেবে পাঠানো হলো
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

// কাস্টম হুক তৈরি (ব্যবহারের সুবিধার্থে)
export const useCart = () => {
	return useContext(CartContext);
};
