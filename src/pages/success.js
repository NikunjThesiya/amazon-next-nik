import Header from "../components/Header";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";

function success() {
	const router = useRouter();
	return (
		<div className="bg-gray-100 h-screen">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Amazon clone built by Nikunj Thesiya."
				/>
				<title>Order Confirmed</title>
				<link rel="icon" href={favicon} />
			</Head>
			<Header />

			<main className="max-w-screen-lg mx-auto mt-4 ">
				<div className="flex flex-col p-10 bg-white">
					<div className="flex items-center space-x-4 mb-5">
						<AiFillCheckCircle className="text-blue-500 text-4xl" />
						<h1 className="text-gray-600 font-semibold text-lg md:text-2xl">
							Thank You, Your Order has been Confirmed!
						</h1>
					</div>
					<p className="text-xs sm:text-sm md:text-base text-gray-500">
						Thank You for shopping with us. We'll send a confirmation once your
						item has been shipped. If you would like to check the status of your
						order, please press the link below.
					</p>
					<button className="shadow-md border border-transparent text-xs md:text-sm mt-8 py-2.5 px-4 rounded-lg focus:outline-none outline-none bg-yellow-200 hover:shadow-md hover:bg-yellow-100 hover:border-yellow-200 whitespace-nowrap focus:shadow-none focus:scale-95 transition-all duration-300 ease-in-out">
						Go to my orders
					</button>
				</div>
			</main>
		</div>
	);
}

export default success;
