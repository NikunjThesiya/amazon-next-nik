import Categories from "./Categories";
import Product from "./Product";
import banner from "../images/6.jpg";

function ProductFeed({ products }) {
	return (
		<div className="flex flex-col items-center justify-center content-center pb-10 mx-auto">
			<Categories />
			<div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-5 mx-auto">
				{products
					.slice(0, 4)
					.map(({ id, title, price, description, category, image }) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
				<img src={banner} alt="banner" className="w-full sm:hidden p-5" />

				{products
					.slice(5)
					.map(({ id, title, price, description, category, image }) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
			</div>
		</div>
	);
}

export default ProductFeed;
