module.exports = {
    name: 'paie',
    description: 'paie!',
    execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
        message.channel.send(`${message.author.username} ${args}`);
    },
};