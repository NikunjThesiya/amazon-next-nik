import MultiCategoryCard from "./MultiCategoryCard";
import SingleCategoryCard from "./SingleCategoryCard";
import img1 from "../images/cardimg1.jpg";
import img2 from "../images/cardimg2.jpg";
import img3 from "../images/cardimg3.jpg";
import img4 from "../images/cardimg4.jpg";
import img5 from "../images/cardimg5.jpg";
import img6 from "../images/cardimg6.jpg";
import img7 from "../images/cardimg7.jpg";
import img8 from "../images/cardimg8.jpg";
import img9 from "../images/cardimg9.jpg";
import img10 from "../images/cardimg10.jpg";

function Categories() {
	return (
		<div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-40 gap-5 mx-5 mb-10 -mt-16 sm:-mt-28 md:-mt-40 lg:-mt-56 xl:-mt-64">
			<MultiCategoryCard
				title="Alexa enabled devices & more"
				img1={img7}
				img2={img8}
				img3={img9}
				img4={img10}
			/>
			<SingleCategoryCard
				title="Explore top rated electronics & accessories"
				img={img1}
			/>
			<MultiCategoryCard
				title="Top picks for your home"
				img1={img3}
				img2={img4}
				img3={img5}
				img4={img6}
			/>
			<SingleCategoryCard title="Fire TV Stick Lite" img={img2} />
		</div>
	);
}

export default Categories;
