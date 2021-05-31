function MultiCategoryCard({ title, img1, img2, img3, img4 }) {
	return (
		<div className="flex flex-col rounded-md items-start bg-white sm:w-72 md:w-80 lg:w-[300px] py-4 px-7">
			<h4 className="font-bold text-base md:text-lg text-gray-700">{title}</h4>
			<div className="grid grid-cols-2 my-2 gap-4">
				<img
					src={img1}
					alt="card img"
					className="rounded-md w-48 sm:w-full sm:h-28 object-cover"
				/>
				<img
					src={img2}
					alt="card img"
					className="rounded-md w-48 sm:w-full sm:h-28 object-cover"
				/>
				<img
					src={img3}
					alt="card img"
					className="rounded-md w-48 sm:w-full sm:h-28 object-cover"
				/>
				<img
					src={img4}
					alt="card img"
					className="rounded-md w-48 sm:w-full sm:h-28 object-cover"
				/>
			</div>
			<span className="py-2 px-2 sm:px-4 sm:py-2 rounded-md  mt-2 bg-gray-100 text-xs sm:text-sm text-gray-500 focus:outline-none cursor-pointer">
				See more
			</span>
		</div>
	);
}

export default MultiCategoryCard;
