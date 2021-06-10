import { Carousel } from "react-responsive-carousel";
import Banner1 from "../images/b1.jpg";
import Banner2 from "../images/b2.jpg";
import Banner3 from "../images/b3.jpg";
import Banner4 from "../images/b4.jpg";
import Banner5 from "../images/b5.jpg";
import Banner6 from "../images/b6.jpg";
import Banner8 from "../images/b8.jpg";
import Banner9 from "../images/b9.jpg";
import Banner11 from "../images/b11.jpg";
import Banner12 from "../images/b12.jpg";
import Banner13 from "../images/b13.jpg";

function Banner() {
	return (
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
			<Carousel
				autoPlay
				swipeable={true}
				infiniteLoop
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img loading="lazy" src={Banner8} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner1} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner2} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner3} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner4} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner5} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner6} alt="banner1" />
				</div>

				<div>
					<img loading="lazy" src={Banner9} alt="banner1" />
				</div>

				<div>
					<img loading="lazy" src={Banner11} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner12} alt="banner1" />
				</div>
				<div>
					<img loading="lazy" src={Banner13} alt="banner1" />
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;
