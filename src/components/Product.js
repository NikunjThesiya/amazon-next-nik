import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import Prime from "../images/prime.png";
import { addToBasket, selectItems } from "../slices/basketSlice";
import Rating from "./Rating";
import { toast } from "react-toastify";

function Product({ id, title, price, description, category, image }) {
	const [rating] = useState(Math.floor(Math.random() * 5) + 1);
	const [hasPrime] = useState(Math.random() < 0.5);
	const dispatch = useDispatch();
	const items = useSelector(selectItems);
	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			description,
			category,
			image,
			rating,
			hasPrime,
		};
		dispatch(addToBasket(product));

		toast.info("Item Added to Cart", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div className="relative rounded-xl sm:w-72 md:w-80 xl:w-72 flex flex-col z-30 mx-5 my-2 md:mx-0 md:my-0 p-8 bg-white  cursor-pointer hover:shadow-xl border border-transparent hover:border-gray-200 transition-all duration-300 ease-in-out">
			<p className="absolute top-4 right-4 bg-yellow-100 rounded-md py-1.5 px-2 text-xs text-gray-500">
				{category}
			</p>

			<img
				src={image}
				className="w-36 md:w-48 h-36 md:h-48 p-6 mt-1 object-contain self-center"
			/>
			<h4 className="font-semibold my-2 line-clamp-2 text-gray-800">{title}</h4>
			<Rating rating={rating} />
			<p className="text-xs mb-2 text-justify line-clamp-2">{description}</p>
			<div className="flex items-center justify-between mb-2 font-semibold text-lg text-gray-700">
				<Currency quantity={price} currency="INR" />

				{hasPrime && (
					<img src={Prime} alt="prime" className="w-16 object-contain" />
				)}
			</div>
			<button
				className="bg-yellow-200 text-sm py-2.5 rounded-lg focus:outline-none hover:bg-yellow-300 shadow-lg hover:transform hover:scale-95 transition-all duration-300 ease-in-out"
				onClick={addItemToBasket}
			>
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
