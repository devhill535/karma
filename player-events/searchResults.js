const Discord = require('discord.js');


module.exports = (client, message, query, tracks) => {
		message.channel.send({
       		embed: {
            color: 'BLUE',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Karma Music System' },
            color: config.embedcolor,
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};