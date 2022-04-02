const dayjs = require("dayjs");

const logger = (msg, data) => {
  const timestamp = dayjs().format("YYYY-MM-DD - HH:mm:ss");
  console.log(`|${timestamp}| ${msg}`, { data });
};

module.exports = {
  logger,
};
