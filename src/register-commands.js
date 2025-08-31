require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
    {
        name: 'query',
        description: 'Format a scryfall query',
        options: [
            {
                name: 'color-id',
                description: 'Inclusive color id of cards',
                type: ApplicationCommandOptionType.String,
            },
            {
                name: "exclude-color",
                description: 'Exclude a color from query',
                type: ApplicationCommandOptionType.String
            }
        ]
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () =>
{
    try
    {
        console.log("Registering Slash Commands...");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log("Slash commands were registered successfully");
    }

    catch (error) 
    {
        console.log(`⚠ There was an error: ${error}`)
    }
})();