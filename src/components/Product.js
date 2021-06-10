import { useState } from "react";
import Currency from "react-currency-formatter";
import Prime from "../images/prime.png";
import Rating from "./Rating";

function Product({ id, title, price, description, category, image }) {
	const [rating] = useState(Math.floor(Math.random() * 5) + 1);

	const [hasPrime] = useState(Math.random() < 0.5);
	return (
		<div className="relative rounded-md sm:w-72 md:w-80 xl:w-72 flex flex-col z-30 mx-5 my-2 md:mx-0 md:my-0 p-8 bg-white">
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
				<Currency quantity={price} currency="USD" />

				{hasPrime && (
					<img src={Prime} alt="prime" className="w-16 object-contain" />
				)}
			</div>
			<button className="bg-yellow-200 text-sm py-2.5 rounded focus:outline-none hover:bg-yellow-300">
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
