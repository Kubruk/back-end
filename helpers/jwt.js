const jwt = require("jsonwebtoken");

const generateJWT = ({ uid, name }) => {
  return new Promise((res, rej) => {
    const payload = { uid, name };

    const options = {
      expiresIn: "3h",
    };

    const onResolve = (error, token) => {
      if (error) {
        console.log(error);
        rej("Authentication failed");
      }

      res(token);
    };

    jwt.sign(payload, process.env.JWT_SEED, options, onResolve);
  });
};

module.exports = {
  generateJWT,
};
