import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import favicon from "../images/favicon.svg";
import ProductFeed from "../components/ProductFeed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/client";

export default function Home({ products }) {
	return (
		<div className="bg-gray-100">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Amazon clone built by Nikunj Thesiya."
				/>
				<title>Amazon By Nikunj Thesiya</title>
				<link rel="icon" href={favicon} />
			</Head>
			{/* Header */}

			<Header />

			{/* banner */}

			<main className="max-w-screen-2xl mx-auto">
				<Banner />
				<ProductFeed products={products} />
			</main>
			<ToastContainer />
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	);
	return { props: { products, session } };
}

// 'https://fakestoreapi.com/products'
