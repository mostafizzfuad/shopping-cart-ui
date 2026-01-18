import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext"; // ১. হুক ইমপোর্ট

const ProductList = () => {
	// ২. কনটেক্সট থেকে ডেটা বের করা
	const { products, loading, error } = useProducts();

	// ৩. লোডিং এবং এরর হ্যান্ডলিং এখন এখানে হবে
	if (loading) return <p>Loading...</p>;
	if (error) return <p className="text-red-500">❌ {error}</p>;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
