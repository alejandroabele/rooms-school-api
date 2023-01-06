const handleSuccessResponse = (payload) => {
  return {
    error: false,
    message: 'OK',
    status: 200,
    payload,
  };
};
const handleErrorResponse = (code, message) => {
  return {
    error: true,
    message,
    status: 500,
    code,
  };
};

module.exports = {
  handleSuccessResponse,
  handleErrorResponse,
};
