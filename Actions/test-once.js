module.exports.once = function (client) { 
    client.once('ready', () => {
		console.log('Ready!');
	});
};