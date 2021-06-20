import Head from "next/head";
import favicon from "../images/favicon.svg";
import moment from "moment";
import { getSession, useSession } from "next-auth/client";
import db from "../../firebase";
import Header from "../components/Header";
import Order from "../components/Order";

function Orders({ orders }) {
	const [session] = useSession();
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Amazon clone built by Nikunj Thesiya."
				/>
				<title>Orders</title>
				<link rel="icon" href={favicon} />
			</Head>
			<Header />
			<main className="max-w-screen-lg mx-auto p-10">
				<h1 className="text-xl md:text-2xl lg:text-3xl text-gray-700 border-b mb-2 pb-2 border-yellow-400">
					Your Orders
				</h1>

				{session ? (
					<div className="mt-5 space-y-4">
						{orders?.map(
							({ id, amount, amountShipping, items, timestamp, images }) => (
								<Order
									key={id}
									id={id}
									amount={amount}
									amountShipping={amountShipping}
									items={items}
									timestamp={timestamp}
									images={images}
								/>
							)
						)}
					</div>
				) : (
					<h2>Please Sign In To See Your Orders</h2>
				)}
			</main>
		</div>
	);
}

export default Orders;

export async function getServerSideProps(context) {
	const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

	// Get the session on the server-side
	// by passing the context of the page request
	// to the getSession function
	const session = await getSession(context);

	if (!session) return { props: {} };

	const ordersInDb = await db
		.collection("users")
		.doc(session.user.email)
		.collection("orders")
		.orderBy("timestamp", "desc")
		.get();

	const orders = await Promise.all(
		ordersInDb.docs.map(async (order) => ({
			id: order.id,
			amount: order.data().amount,
			amountShipping: order.data().amount_shipping,
			images: order.data().images,
			timestamp: moment(order.data().timestamp.toDate()).unix(),
			items: (
				await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
			).data,
		}))
	);

	return {
		props: {
			orders,
		},
	};
}
