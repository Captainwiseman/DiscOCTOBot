const init = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: `Interaction: ${interaction.commandName} Error: ${error}`,
        ephemeral: true,
      });
    }
  });
};

module.exports = {
  init,
};
