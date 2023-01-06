const { tokenSign, verifyToken } = require('../utils/generateToken');
const { handleSuccessResponse } = require('../utils/ResponseHandler');
module.exports = {
  login: async (req, res) => {
    const { username, password } = req.allParams();

    const userFinded = await user.findOne({
      username,
    });
    if (!userFinded) {
      res.status(404).send({
        error: 'User not found',
      });
    }
    const checkPassword = password === userFinded.password;
    if (checkPassword) {
      const token = await tokenSign(userFinded);
      res
        .status(200)
        .json(handleSuccessResponse({ token, role: userFinded.role }));
    } else {
      res.status(401).send({ message: 'No autorizado' });
    }
  },
  loginJWT: async (req, res) => {
    const { token } = req.allParams();
    if (!token) {
      res.forbidden();
    }
    const tokenVerifed = await verifyToken(token);
    if (tokenVerifed) {
      res.status(200).json(handleSuccessResponse(tokenVerifed));
    } else {
      res.forbidden();
    }

    //--•
    // Otherwise, this request did not come from a logged-in user.
  },
};
