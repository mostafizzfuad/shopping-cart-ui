import { createContext, useContext, useEffect, useState } from "react";

// ১. কনটেক্সট অবজেক্ট তৈরি করা
const ProductContext = createContext();

// ২. প্রোভাইডার কম্পোনেন্ট তৈরি করা
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				// const res = await fetch("http://localhost:5000/products"); // রিমুভ
				const res = await fetch("/api/products"); // পরিবর্তিত
				if (!res.ok) throw new Error("Failed to fetch products");
				const data = await res.json();
				setProducts(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// ৩. ভ্যালু রিটার্ন করা
	return (
		<ProductContext.Provider value={{ products, loading, error }}>
			{children}
		</ProductContext.Provider>
	);
};

// ৪. কাস্টম হুক তৈরি করা (সহজে কনটেক্সট ব্যবহার করার জন্য)
export const useProducts = () => {
	return useContext(ProductContext);
};
