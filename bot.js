const {Client, GatewayIntentBits, Partials, Collection} = require('discord.js');
const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits
const {User, Message, GuildMember, ThreadMember }= Partials

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    Partials:[User, Message, GuildMember, ThreadMember]
})

const { loadEvents } = require("./Handlers/eventHandler");
client.events = new Collection;

loadEvents(client);

client.login('MTAyNTc5Mzk4NDEzNzc5NzY2Mw.Gt8ZYw.-boiAadiut-o8yPnUuJeRmQrzIeNWNqAZeUIfU');