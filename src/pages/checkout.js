import Header from "../components/Header";
import Banner from "../images/6.jpg";

function Checkout() {
	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left */}
				<div className="flex-grow space-y-5 m-5 px-5">
					<img src={Banner} alt="banner" className="object-contain w-full" />

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl font-medium">Shopping Cart</h1>
					</div>
				</div>
				{/* Right */}
				<div></div>
			</main>
		</div>
	);
}

export default Checkout;
