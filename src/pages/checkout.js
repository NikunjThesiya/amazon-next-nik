import Head from "next/head";
import favicon from "../images/favicon.svg";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import Banner from "../images/6.jpg";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
	"pk_test_51J2ELPSHFIMAomxE5JPMYRJggSi9QMP9Hh0UA2ZlfdYI58Ge0TpVAq62CfpDvCDre4kswZAdk5bVI7mlhXlDLEUs008XJiaeCV"
);

function Checkout() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);
	const [session] = useSession();

	const createCheckoutSession = async () => {
		const stripe = await stripePromise;

		const checkoutSession = await axios.post("./api/create-checkout-session", {
			items: items,
			email: session.user.email,
		});

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) {
			alert(result.error.message);
		}
	};

	return (
		<div className="bg-white md:bg-gray-100 pb-6">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Amazon clone built by Nikunj Thesiya."
				/>
				<title>checkout</title>
				<link rel="icon" href={favicon} />
			</Head>
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left */}
				<div className="flex-grow space-y-5 m-2 md:m-5 px-5">
					<img src={Banner} alt="banner" className="object-contain w-full" />

					<div className="flex flex-col md:px-8 py-8 pb-52 lg:pb-0 space-y-6 bg-white">
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
						<div className="w-full lg:w-auto fixed bottom-0 bg-amazon_blue-light lg:sticky lg:top-32 flex flex-col items-center lg:bg-white lg:m-5 px-10 md:py-10 py-8 overflow-hidden">
							<h2 className="whitespace-nowrap text-white lg:text-gray-500">
								Subtotal ({items.length} Items)
							</h2>
							<span className="font-semibold text-lg text-gray-50 lg:text-gray-500">
								<Currency quantity={total} currency="INR" />
							</span>

							<button
								role="link"
								onClick={createCheckoutSession}
								className={
									session
										? "shadow-lg border border-transparent text-xs md:text-sm mt-3 py-2.5 px-4 rounded-lg focus:outline-none bg-yellow-200 hover:shadow-md hover:bg-yellow-100 hover:border-yellow-200 whitespace-nowrap"
										: "shadow-lg border border-transparent text-xs md:text-sm mt-3 py-2.5 px-4 rounded-lg focus:outline-none bg-gray-300 border-gray-400 cursor-not-allowed whitespace-nowrap"
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
