//const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


client = new Discord.Client();
client.commands = new Discord.Collection();
const once = require('./Actions/once.js');
const on = require('./Actions/on.js');
const commands = require ('./add_commands.js');


//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//for (const file of commandFiles) {
//	const command = require(`./commands/${file}`);
//	client.commands.set(command.name, command);
//}

client = commands.read(client);

once.do(client);
on.do(client, prefix);

client.login(token);