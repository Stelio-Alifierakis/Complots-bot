module.exports.do = function (client) { 
    client.once('ready', () => {
		console.log('Ready!');
	});
};