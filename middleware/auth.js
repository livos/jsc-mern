const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  console.log(authHeaders);
  next();
};

export default auth;
