import { IoMdStar, IoMdStarOutline } from "react-icons/io";

function Rating({ rating }) {
	return (
		<div className="text-lg mb-2">
			{rating === 1 ? (
				<div className="flex text-yellow-400">
					<IoMdStar />
					<IoMdStarOutline />
					<IoMdStarOutline />
					<IoMdStarOutline />
					<IoMdStarOutline />
				</div>
			) : rating === 2 ? (
				<div className="flex text-yellow-400">
					<IoMdStar />
					<IoMdStar />
					<IoMdStarOutline />
					<IoMdStarOutline />
					<IoMdStarOutline />
				</div>
			) : rating === 3 ? (
				<div className="flex text-yellow-400">
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
					<IoMdStarOutline />
					<IoMdStarOutline />
				</div>
			) : rating === 4 ? (
				<div className="flex text-yellow-400">
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
					<IoMdStarOutline />
				</div>
			) : (
				<div className="flex text-yellow-400">
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
					<IoMdStar />
				</div>
			)}
		</div>
	);
}

export default Rating;
