const { SlashCommandBuilder } = require("@discordjs/builders");
const { getData, saveData } = require("../services/data");
const dayjs = require("dayjs");
const { logger } = require("../services/utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("syncup")
    .setDescription("Syncs you up to the guild timezone!"),
  // .addStringOption((option) => {
  //   option
  //     .setName("input")
  //     .setDescription("Enter your current time")
  //     .setRequired(true);
  // })
  async execute(interaction) {
    const data = await getData();
    const {
      user: { id, username, discriminator },
    } = interaction;
    logger("Bot recieved interaction", interaction);
    // const userIdTimeDifferenceFromUTC =
    //   // interaction.options.getString("current");
    const timeInUtc = dayjs().format("HH:mm:ss");

    const newData = Object.assign({}, data, { time: timeInUtc });
    saveData(newData);

    // interaction.reply({ content: "yo", ephemeral: true });
    // console.log({ interaction, data });
  },
};
