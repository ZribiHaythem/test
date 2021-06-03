const axios = require("axios");
module.exports = {
  getAll: (req, res) => {
    axios
      .get("https://api.github.com/users/ZribiHaythem/repos")
      .then(({ data }) => {
        res.send(data);
      })
      .catch((err) => res.send(err));
  },
};
