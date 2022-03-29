const fs = require("fs-extra");

require("dotenv").config();

const saveData = async (data) => {
  try {
    await fs.writeJson(process.env.COLLECTION, data);
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

const getData = async () => {
  try {
    const data = await fs.readJson(process.env.COLLECTION);
    return data;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
    saveData,
    getData
}