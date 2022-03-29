const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timez")
    .setDescription("/mytimez will display your current time"),
  async execute(interaction) {
    const reply = `Current UTC time ${new Date().toUTCString()}`;
    await interaction.reply(reply);
  },
};
