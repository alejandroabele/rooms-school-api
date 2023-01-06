const jwt = require('jsonwebtoken');

const tokenSign = async ({ id, role }) => {
  return jwt.sign(
    {
      id: id,
      role: role,
    },
    sails.config.custom.JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, sails.config.custom.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {}
};

module.exports = {
  tokenSign,
  verifyToken,
  decodeToken,
};
