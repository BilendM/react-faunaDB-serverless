const axios = require("axios");
require("dotenv").config();

module.exports = async (query, variables) => {
  const {
    data: { data, errors },
  } = await axios({
    url: "https://graphql.eu.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });
  console.log("data", data);
  if (errors) {
    console.error(errors);
    throw new Error("Something went wrong");
  }
  return data;
};
