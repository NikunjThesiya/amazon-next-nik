import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import Banner from "../images/6.jpg";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";

function Checkout() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);
	const [session] = useSession();
	return (
		<div className="bg-white md:bg-gray-100 pb-6">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left */}
				<div className="flex-grow space-y-5 m-2 md:m-5 px-5">
					<img src={Banner} alt="banner" className="object-contain w-full" />

					<div className="flex flex-col md:px-8 py-8 space-y-6 bg-white">
						<h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-500">
							{items.length === 0
								? "Your Amazon Cart is empty"
								: `Shopping Cart - ${items.length} Items`}
						</h1>
						<div className="flex flex-col space-y-4">
							{items.map((item, i) => (
								<CheckoutProduct
									key={i}
									id={item.id}
									title={item.title}
									rating={item.rating}
									price={item.price}
									description={item.description}
									category={item.category}
									image={item.image}
									hasPrime={item.hasPrime}
								/>
							))}
						</div>
					</div>
				</div>
				{/* Right */}
				<div className="">
					{items.length > 0 && (
						<div className="flex flex-col items-center bg-white m-5 px-10 py-10 rounded-2xl lg:rounded-none">
							<h2 className="whitespace-nowrap">
								Subtotal ({items.length} Items)
							</h2>
							<span className="font-bold text-lg text-gray-500">
								<Currency quantity={total} currency="USD" />
							</span>

							<button
								className={
									session
										? "shadow-lg border border-transparent text-sm mt-3 py-2.5 px-4 rounded-lg focus:outline-none bg-yellow-200 hover:shadow-md hover:bg-yellow-100 hover:border-yellow-200 self-end justify-self-end"
										: "shadow-lg border border-transparent text-sm mt-3 py-2.5 px-4 rounded-lg focus:outline-none bg-gray-300 border-gray-400 cursor-not-allowed"
								}
								disabled={!session}
							>
								{session ? "Proceed To Checkout" : "Sign In To Checkout"}
							</button>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
