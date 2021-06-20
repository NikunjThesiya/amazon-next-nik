module.exports = {
	images: {
		domains: ["pngimg.com", "fakestoreapi.com", "freepnglogos.com"],
	},
	env: {
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
	},
};
const withImages = require("next-images");

module.exports = withImages({});
