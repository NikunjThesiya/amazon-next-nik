function SingleCategoryCard({ title, img }) {
	return (
		<div className="flex flex-col rounded-md items-start bg-white  sm:w-72 md:w-80 lg:w-[300px] py-4 px-7">
			<h4 className="font-bold text-base md:text-lg text-gray-700">{title}</h4>
			<img src={img} alt="card img" className="my-2 rounded-md w-full" />
			<span className="py-2 px-2 sm:px-4 sm:py-2 rounded-md  mt-2 bg-gray-100 text-xs sm:text-sm text-gray-500 focus:outline-none cursor-pointer">
				See more
			</span>
		</div>
	);
}

export default SingleCategoryCard;
