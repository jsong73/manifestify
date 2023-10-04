const jwt = require("jsonwebtoken");
const secret = "mysecretssshhhhhhh";
const expiration = "10h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
      // console.log("Received token:", token);
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
    
      req.user = data;
    } catch (error){
      // console.error("Token verification error:", error);
    }
    return req;
  },
  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
