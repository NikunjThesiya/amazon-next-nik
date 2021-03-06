import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import {
	HiMenuAlt2,
	HiOutlineMenu,
	HiOutlineLocationMarker,
} from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import UserImg from "../images/user.svg";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
	const [sidebar, setSidebar] = useState(false);
	const [userIconMenu, setUserIconMenu] = useState(false);
	const [session] = useSession();
	const items = useSelector(selectItems);

	const router = useRouter();

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};

	return (
		<header className="sticky z-50 top-0">
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue py-3 px-4 md:space-x-5 space-x-3">
				<div className="flex md:hidden flex-col items-center">
					<motion.span
						className="bg-gray-100 bg-opacity-10 text-white p-2 rounded-xl text-xl cursor-pointer hover:bg-opacity-25"
						onClick={() => setSidebar(true)}
					>
						<HiOutlineMenu className="text-white text-opacity-70" />
					</motion.span>
				</div>
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<img
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						className="w-16 md:w-20 object-contain cursor-pointer"
						onClick={() => router.push("/")}
					/>
				</div>

				{/* Search */}
				<div className="hidden sm:flex items-center bg-white rounded-lg flex-grow md:mx-3">
					<input
						type="text"
						className="focus:outline-none text-sm px-3 flex-shrink h-full flex-grow"
					/>
					<div className="text-white bg-yellow-500 hover:bg-yellow-400 text-xl p-2 rounded-lg cursor-pointer">
						<BiSearch />
					</div>
				</div>

				{/* Right */}
				<div className="flex space-x-5 md:space-x-9 items-center text-gray-200">
					<div className="hidden lg:flex flex-col items-start text-xs link">
						<p>{session ? `Hello! ${session.user.name}` : `Sign In`}</p>
						<p className="font-semibold text-sm">Account & Lists</p>
					</div>
					<div
						className="hidden lg:flex flex-col items-start text-xs link"
						onClick={() => router.push("/orders")}
					>
						<p>Returns</p>
						<p className="font-semibold text-sm">& Orders</p>
					</div>

					<div className="flex space-x-2 items-center">
						<span className="bg-gray-100 bg-opacity-20 text-white rounded-full text-xl md:text-2xl cursor-pointer hover:bg-opacity-25 w-9 h-9">
							<img
								src={session ? session.user.image : UserImg}
								alt="User Image"
								className="rounded-full"
								onClick={() => setUserIconMenu(!userIconMenu)}
							/>

							<div
								className={
									userIconMenu
										? "flex relative top-3 right-0 bg-amazon_blue border border-gray-50 shadow-md rounded-xl text-gray-50 w-24 text-xs md:text-sm z-50  flex-col items-center justify-center"
										: "hidden"
								}
							>
								<p className="py-3 px-2 hover:bg-amazon_blue-light  rounded-xl w-full text-center">
									Orders
								</p>
								{session ? (
									<p
										className="py-3 px-2 hover:bg-amazon_blue-light rounded-xl w-full text-center"
										onClick={signOut}
									>
										Sign Out
									</p>
								) : (
									<p
										className="py-3 px-2 hover:bg-amazon_blue-light rounded-xl w-full text-center"
										onClick={signIn}
									>
										Sign In
									</p>
								)}
							</div>
						</span>

						<div className="flex relative items-center px-3">
							<span
								className="bg-gray-100 bg-opacity-20 text-white p-2 rounded-full text-xl md:text-2xl cursor-pointer hover:bg-opacity-25"
								onClick={() => router.push("/checkout")}
							>
								<RiShoppingCartLine />
							</span>
							<span className="absolute top-0 right-px bg-yellow-500 h-5 w-5 rounded-full text-xs flex items-center justify-center">
								<span className="">{items.length}</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Searchbar */}
			<div className="flex sm:hidden  items-center bg-amazon_blue-light text-xs md:text-sm px-4 py-2 h-12">
				{/* Search */}
				<div className="flex items-center bg-white rounded-lg flex-grow my-2">
					<input
						type="text"
						className="focus:outline-none text-sm bg-transparent px-3 flex-shrink h-full flex-grow"
						placeholder="Search"
					/>
					<div className="text-white bg-yellow-500 hover:bg-yellow-400 text-xl p-2 rounded-lg cursor-pointer">
						<BiSearch />
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className="flex items-center bg-amazon_blue-light text-white text-xs md:text-sm h-11 px-4 lg:px-9 space-x-1 justify-between lg:justify-start">
				<p
					className="hidden lg:flex items-center space-x-2 font-semibold border hover:border-white border-transparent cursor-pointer py-1 px-2 rounded"
					onClick={() => setSidebar(true)}
				>
					<HiOutlineMenu className="text-xl" />
					<span>All</span>
				</p>

				<div className="lg:flex hidden items-center overflow-hidden">
					<p className="header-link">
						<span>Best Sellers</span>
					</p>
					<p className="header-link">
						<span>Mobile</span>
					</p>
					<p className="header-link">
						<span>Prime</span>
					</p>
					<p className="header-link">
						<span>Fashion</span>
					</p>
					<p className="header-link">
						<span>Electronics</span>
					</p>
					<p className="header-link">
						<span>New Releases</span>
					</p>
					<p className="header-link">
						<span>Customer Service</span>
					</p>
					<p className="header-link">
						<span>Today's Deals</span>
					</p>
					<p className="header-link">
						<span>Amazon Pay</span>
					</p>
				</div>

				<div className="flex lg:hidden items-center">
					<p className="header-link">
						<span>Wish List</span>
					</p>
					<p className="header-link">
						<span>Deals</span>
					</p>
					<p className="header-link">
						<span>Sell</span>
					</p>
				</div>
			</div>

			{/* Sidebar */}
			<AnimatePresence className="w-full">
				<motion.div
					className="flex z-50 w-full fixed top-0 h-screen"
					initial={{ opacity: 0, x: "-100%" }}
					animate={sidebar ? "open" : "closed"}
					variants={variants}
					id="sidebar"
				>
					<div className="flex flex-col w-72 md:w-96 bg-gray-100 overflow-y-scroll hide-scrollbar divide-y-2 divide-gray-400 shadow-2xl bg-opacity-70 backdrop-filter backdrop-blur-lg">
						<div className="flex items-center justify-between bg-amazon_blue-light p-4 sticky top-0">
							{session ? (
								<p className="text-white text-base md:text-lg font-bold">
									Hello, {session.user.name}
								</p>
							) : (
								<p className="text-white text-base md:text-lg font-bold">
									Sign In
								</p>
							)}

							<span
								className="bg-gray-100 bg-opacity-25 text-white p-2 rounded-xl text-xl cursor-pointer hover:bg-opacity-10"
								onClick={() => setSidebar(false)}
							>
								<IoMdClose className="text-white text-opacity-70" />
							</span>
						</div>

						{/* Mobile First Menu */}
						<div className="flex flex-col">
							<p className="sidebar-link" onClick={() => router.push("/")}>
								Home
							</p>
							<p
								className="sidebar-link"
								onClick={() => router.push("/checkout")}
							>
								Go to Cart
							</p>
							<p className="sidebar-link">Orders</p>
							<p className="sidebar-link">Customer Services</p>
						</div>

						{/* Explore */}
						<div className="flex flex-col">
							<span className="px-4 py-3 font-semibold text-lg">Explore</span>
							<p className="sidebar-link">Electronics</p>
							<p className="sidebar-link">Computer & Accseeories</p>
							<p className="sidebar-link">Apparel</p>
							<p className="sidebar-link">Video Games</p>
							<p className="sidebar-link">See All Categories</p>
						</div>

						{/* Settings */}
						<div className="flex flex-col">
							<span className="px-4 py-3 font-semibold text-lg">Settings</span>
							<p className="sidebar-link">Notifications</p>
							<p className="sidebar-link">Default Purchase Settings</p>
							<p className="sidebar-link">Legal</p>
							{session && (
								<p className="sidebar-link cursor-pointer" onClick={signOut}>
									Sign Out
								</p>
							)}
						</div>
					</div>

					<div
						className="flex-grow bg-black h-screen bg-opacity-25"
						onClick={() => setSidebar(false)}
					></div>
				</motion.div>
			</AnimatePresence>
		</header>
	);
}

export default Header;
