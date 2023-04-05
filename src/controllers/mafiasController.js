const { Mafia } = require('../models');

exports.getAllMafias = async (req, res, next) => {
	try {
		const { q = '', page, perPage } = req.query;

		const searchFilter = {
			name: {
				$regex: q,
				$options: 'i',
			},
		};

		const pageNum = page || 1;
		const itemsPerPage = perPage || 12;

		const allMafias = await Mafia.find(searchFilter, null, {
			limit: itemsPerPage,
			skip: (pageNum - 1) * itemsPerPage,
		});
		res.json(allMafias);
	} catch (error) {
		next(error);
	}
};

exports.getMafiaById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const mafia = await Mafia.findById(id);
		if (!mafia) {
			res.status(404).json({
				message: `Not found id ${id}`,
			});
			return;
		}

		res.json(mafia);
	} catch (error) {
		next(error);
	}
};

exports.getThree = async (req, res, next) => {
	try {
		const { q = '', page, perPage } = req.query;

		const searchFilter = {
			name: {
				$regex: q,
				$options: 'i',
			},
		};

		const pageNum = page || 1;
		const itemsPerPage = perPage || 12;

		const allMafias = await Mafia.find(searchFilter, null, {
			limit: itemsPerPage,
			skip: (pageNum - 1) * itemsPerPage,
		});
		const threeMafias = allMafias.slice(0, 3);
		res.json(threeMafias);
	} catch (error) {
		next(error);
	}
};

exports.createMafia = async (req, res, next) => {
	try {
		const newMafia = new Mafia({
			name: req.body.name,
			imageUrl: req.body.imageUrl,
			description: req.body.description,
		});
		const savedMafia = await newMafia.save();
		// ^ Save the new mafia object to the database
		res.status(201).json({
			message: 'Mafia created',
			mafiaId: savedMafia._id,
		}); // Send the new mafia ID in the response
	} catch (error) {
		next(error);
	}
};

exports.deleteMafia = async (req, res, next) => {
	try {
		const { id } = req.params;
		const mafia = await Mafia.findById(id);
		if (!mafia) {
			res.status(404).json({
				message: `Not found id ${id}`,
			});
			return;
		}
		const response = await Mafia.findByIdAndDelete(id);
		res.json(response);
	} catch (error) {
		next(error);
	}
};

exports.deleteAllMafias = async (req, res, next) => {
	try {
		await Mafia.deleteMany({});
		res.status(204).end();
	} catch (err) {
		next(err);
	}
};
