exports.testget = async (req, res, next) => {
	try {
		const currentJson = {
			data: [{ name: 'niger' }],
		};
		res.json(currentJson);
	} catch (error) {}
};
