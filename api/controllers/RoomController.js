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
        .json(handleSuccessResponse(await room.create(params).fetch()));
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
        .json(handleSuccessResponse(await room.find(params)));
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
            await room.update({ id: params.id }).set(params)
          )
        );
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
  delete: async (req, res) => {
    const params = req.allParams();
    try {
      return await res
        .status(200)
        .json(handleSuccessResponse(await room.destroy(params)));
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
  findOne: async (req, res) => {
    const params = req.allParams();
    try {
      return await res
        .status(200)
        .json(handleSuccessResponse(await room.findOne(params)));
    } catch (error) {
      res.status(500).json(handleErrorResponse(error.code, error.details));
    }
  },
};
