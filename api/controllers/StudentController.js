const {
  handleErrorResponse,
  handleSuccessResponse,
} = require('../utils/ResponseHandler');
module.exports = {
  create: async (req, res) => {
    try {
      const params = req.allParams();
      console.log(params);
      return await res
        .status(200)
        .json(handleSuccessResponse(await student.create(params).fetch()));
    } catch (error) {
      console.log(error);
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
  find: async (req, res) => {
    const params = req.allParams();
    try {
      return await res
        .status(200)
        .json(handleSuccessResponse(await student.find(params).populateAll()));
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
  update: async (req, res) => {
    const params = req.allParams();
    try {
      return await res
        .status(200)
        .json(
          handleSuccessResponse(
            await student.update({ id: params.id }).set(params)
          )
        );
    } catch (error) {
      console.log(error);
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
  delete: async (req, res) => {
    const params = req.allParams();
    try {
      return await res
        .status(200)
        .json(handleSuccessResponse(await student.destroy(params)));
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error));
    }
  },
  findOne: async (req, res) => {
    const params = req.allParams();
    try {
      const data = await student.findOne(params).populateAll();
      const brothers = await student
        .find({
          id: { '!=': data.id },
          lastname: data.lastname,
        })
        .populateAll();
      data.brothers = brothers;
      return await res.status(200).json(handleSuccessResponse(data));
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
};
