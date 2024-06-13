export const verifyUser = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "Invalid Admin" });
    }
    jwt.verify(token, process.env.User_Key, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.userid = decoded.userid;
      next();
    });
  };