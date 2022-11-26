const attachCookies = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 100000),
    secure: process.env.NODE_ENV === "production",
  });
};

export default attachCookies;
