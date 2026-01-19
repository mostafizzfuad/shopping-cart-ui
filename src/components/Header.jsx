import { useState } from "react"; // ১. ইমপোর্ট
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cart } = useCart();
	const [showDropdown, setShowDropdown] = useState(false); // ২. স্টেট তৈরি

	// reduce মেথড ব্যবহার করে মোট কোয়ান্টিটি হিসাব করা হচ্ছে
	const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

	// ৩. টোটাল প্রাইস ক্যালকুলেশন
	const totalPrice = cart
		.reduce((acc, item) => acc + item.price * item.qty, 0)
		.toFixed(2);

	return (
		<header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
			<h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>

			<div className="relative">
				{/* ৪. বাটন যা ড্রপডাউন ওপেন/ক্লোজ করবে */}
				<button
					onClick={() => setShowDropdown(!showDropdown)}
					className="cursor-pointer"
				>
					<FaShoppingCart className="text-2xl text-gray-700" />

					{/* যদি কার্টে আইটেম থাকে, তবেই ব্যাজ দেখাবে */}
					{cart.length > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
							{itemCount}
						</span>
					)}
				</button>

				{/* ৫. ড্রপডাউন মেনু (কন্ডিশনাল রেন্ডারিং) */}
				{showDropdown && (
					<div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
						<div className="p-4">
							<h2 className="font-semibold text-lg mb-2">
								Cart Items
							</h2>

							{cart.length === 0 ? (
								<p className="text-gray-500 text-sm">
									Your cart is empty.
								</p>
							) : (
								<div>
									<ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
										{cart.map((item) => (
											<li
												key={item.id}
												className="flex justify-between items-center py-2"
											>
												<div>
													<p className="font-medium">
														{item.name}
													</p>
													<p className="text-sm text-gray-500">
														{item.qty} × $
														{item.price}
													</p>
												</div>
											</li>
										))}
									</ul>
									<div className="mt-4 flex justify-between font-semibold border-t pt-2">
										<span>Total:</span>
										<span>${totalPrice}</span>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
