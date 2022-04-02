const { init } = require("./process");
const { logger } = require("./services/utils");
const fs = require("node:fs");

require("dotenv").config();

const { Client, Intents, Collection, Invite } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// On Ready
client.on("ready", function (e) {
  logger("Bot Logged in", { userTag: client.user.tag, onReadyCallback: e });
  init(client);
});

// Authenticate & Login
client.login(process.env.DISCORD_TOKEN);
