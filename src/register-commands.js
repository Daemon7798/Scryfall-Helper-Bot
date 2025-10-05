require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
    {
        name: 'query',
        description: 'Format a scryfall query',
        options: [
            {
                name: 'search-text',
                description: 'Search text',
                type: ApplicationCommandOptionType.String,
            },
            {
                name: 'color-id',
                description: 'Inclusive color id of cards',
                type: ApplicationCommandOptionType.String,
            },
            {
                name: "exclude-color",
                description: 'Exclude a color from query. Semicolons to separate multiple parameters',
                type: ApplicationCommandOptionType.String
            },
            {
                name: "card-type",
                description: 'Only return specific card type(s). Semicolons to separate multiple parameters, - for negation',
                type: ApplicationCommandOptionType.String
            },
            {
                name: "activated-abilities",
                description: 'Exclude cards with activated abilites',
                type: ApplicationCommandOptionType.Boolean
            },
            {
                name: "triggered-abilities",
                description: 'Exclude cards with triggered abilites',
                type: ApplicationCommandOptionType.Boolean
            },
            {
                name: "oracle-text",
                description: 'Text included somewhere on the card. Semicolons to separate multiple parameters, - for negation',
                type: ApplicationCommandOptionType.String
            },
            {
                name: "oracle-tags",
                description: 'Tags associated with card function. Semicolons to separate multiple parameters, - for negation',
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