const { SlashCommandBuilder } = require("@discordjs/builders");
const { getData, saveData } = require("../services/data");
const dayjs = require("dayjs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("syncup")
    .setDescription("Syncs you up to the guild timezone!")
    .addStringOption((option) => {
      option.setName("currentTime").setDescription("Enter your current time");
    }),

  async execute(interaction) {
    const data = await getData();

    const userIdTimeDifferenceFromUTC =
      interaction.options.getString("currentTime");
    const timeInUtc = dayjs(userIdTimeDifferenceFromUTC).format("HH:mm:ss");

    const newData = Object.assign({}, data, { time: timeInUtc });
    saveData(newData);

    interaction.reply({ content: "yo", ephemeral: true });
    console.log({ interaction, data });
  },
};
