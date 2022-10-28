const auth = async (req, res, next) => {
  const headers = req.headers;
  const authHeaders = req.headers.authorization;
  console.log(headers);
  console.log(authHeaders);
  next();
};

export default auth;
