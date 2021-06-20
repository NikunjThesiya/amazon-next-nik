import Rating from "./Rating";
import Prime from "../images/prime.png";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
}) {
	const dispatch = useDispatch();

	const removeItemFromCart = () => {
		dispatch(removeFromBasket({ id }));
	};

	return (
		<div className="grid items-center grid-cols-4 md:border-t-2 md:border-b-2 border-b border-t space-x-5 border-gray-200 p-5">
			<img
				src={image}
				alt={title}
				className="w-24 h-24 md:w-40 md:h-40 object-contain p-2 md:p-3"
			/>

			<div className="col-span-3 flex flex-col items-start">
				<p className="text-sm md:text-base font-medium">{title}</p>
				<Rating rating={rating} />
				<div className="font-medium text-gray-500 text-sm md:text-lg">
					<Currency quantity={price} currency="INR" />
				</div>
				<p className="text-xs line-clamp-1 md:line-clamp-3 my-1 md:my-2">
					{description}
				</p>
				<div className="flex w-full items-center justify-between">
					<div>
						{hasPrime && (
							<img
								src={Prime}
								alt="prime"
								className="w-10 md:w-16 object-contain"
							/>
						)}
					</div>
					<button
						className="shadow-lg border border-transparent text-xs md:text-sm mt-3 py-2 md:py-2.5 px-3 md:px-4 rounded-lg focus:outline-none bg-white border-gray-200 hover:shadow-md hover:bg-red-100 hover:border-red-200 self-end justify-self-end"
						onClick={removeItemFromCart}
					>
						Remove Item
					</button>
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
