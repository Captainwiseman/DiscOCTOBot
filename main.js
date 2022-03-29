const dayjs = require("dayjs");
const { init } = require("./process");
const fs = require('node:fs');

require("dotenv").config();

const { Client, Intents, Collection, Invite } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// On Ready
client.on("ready", function (e) {
  const timestamp = dayjs().format("YYYY-MM-DD - HH:mm:ss");
  console.log(`|${timestamp}| Bot Logged in as ${client.user.tag}!`);
//   console.log(e);
    init(client);
});

// Authenticate & Login
client.login(process.env.DISCORD_TOKEN);
