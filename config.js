const fs = require('fs');
// Load .env first (standard dotenv), then config.env (overrides .env if both exist)
if (fs.existsSync('.env')) require('dotenv').config({ path: './.env' });
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VW204bSRD9l36llHRV3y1FWkMwl4SLMQFDxMPgaZsBezyaGTt4I//7qnqA5GE3Yi1GjNvd1adPnVPVP0W5LJr4JW5E76eo6mKdtZFf200VRU/srqbTWAsQedZmovfdS7AaSANaBHQGHAIazyPagTZA5ADJA6EEsiABtQOSFtARYACSspujFHgCIkwhtAciDSR5SAEpk96RzN0WRLW6nxeTP8BC5YAU7xoArWQsjAqdBE1pJFCChcpCAK+ApAPkJ21PFpAcWAOo+PGAnhdIIDRA/GfAWkBvAI0GZ++2jCsr6qKc7VcPcRHrbP4lbs6zon4flcyHcmAUBJdwGQuWkRMC8q5agmKQHVgTEhajAJEpDkAEOjBF4D1g4B+6vFAXw6nuAU/vIxENIGOxgBKBUAEqIAqARoJ1QBoBrQbUGjBIIJUAsiZ4E0DFGBm9TZTyfD5FCswHMwgYEIxLWVGAsuOxKWZlzI/yWLZFu3m3GCWQ5iDgFDgN6HU6cOAche4oDBxQ2y7XzgJDwQ42oDSdTFh1vpvGAtKalew9KJvUmOaRfh+JrG/T5UkSKA2KCZCgfeIMmR/FYH0aJiIIFjyv6sDYlzndKx/GJW1oJtQAWnYbMfmaU/Abgef1q5Gf/o8QOUWJSM87OHAsg5A8lOTDWrIInDxKnmdM0rH+WIq8OiXcdPicBwrA6mZ1somZXl6qWE0SPL5Tji9BfdpNsWtlF4ztGmyXZQ2GyQjMM1cTy0plI2OX/uQURR1vZJjGlGjWMifbyQQ0vPGYtav6T3R1gTwExUbjPBuT4JBNY+TAOSAIOpmFtAXvINVHxuS7Cmc0sEU1kGLjdmJA47pDOQnBg5VdmWVbS99Btqo7jWOBp0rMRPB6h+BSBKOBjAI2KVr+x7RwakwAPq3SLy7VgIRMKwsuGVUyGSk9T3FzlIsebkHUcVY0bZ21xbLkMWdAZPl6FCd1bJPgxN71crh+PG+Gm6MrNb7Prr9ctLdusbvU9883D8P1eHf+3CwWt/f7N58EiKpeTmLTxPywaNplvTmJTZPNYiN63+9AlPG57aTMuykEMS3qpv1Wrqr5Mstfdf76YzaZLFdlO9qUkz1+ibXoyV/DsW2LctZwQldlVk8einXce8jaRvSm2byJbweMdcxFr61X8a2w7y1zVoA1cuyOvmoBYpGUUeQ8KhGtCmSJZM+ov5oPPzhsVlUfytgKEPM0DZGCQ2mNcy7wPB7evuHjcHlss2LeMI8nO1fheDLYPzlDkw8PDvr7s/7erC9+nedVoR3xj8f7crKm2WAS2+vK60rn7fHYt1d7Q7xffbvAs/XNerVzNrk6+fQvQURPzA8f7hcfx/qmuN3EHxsKe7PHK1WOivN67aanV88Pz0dn/eLg8n6R3+xgJecn9nHYjK6+Hvxwp+fng4+HZvJ4YcY3sb+8+Dz1H+n6c/8T75bHdTGJv292nF/OB1/osLocPF3vjU7nO7huXdlOh9k6r9qd48fBZT2VZ4cX1aLZDMpyczwaLWQxvpzQ02xQnzxPT6fDw8F+/nV8uy7+Prl9XM94s1fvzl+aSJHExJnir9MiplpYZov4nsx1wFlgcgu/xXiprv9RGLjJsX8MVyR2F7uQ7x5cQEPoepNMBjcW0LrusiFDakeUrk9ec9NJTV52rdel2pkuRKkfyFTskBsock28227vQFTzrJ0u64XoiazM62WRCxD1csXaPyqnyz9d6YDAgwEPno0/z5q2/8tSl8UiNm22qEQPnfdaGe7kYrHpV9WozdpXJ4o+fz7vFmL7D2YAY3dUCgAA",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".,!,?,/,\,$",
    BOT_NAME:              process.env.BOT_NAME || "𝘽​⊙𝙗 𝘽​⊙𝙩",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "601165811519",
    OWNER_NAME:            process.env.OWNER_NAME || "Star",
    DESCRIPTION:           process.env.DESCRIPTION || "Bob Bot likes banana!",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/waa8nl.jpg",
    LIVE_MSG:              process.env.LIVE_MSG || "Bob's server is currently active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Bob Bot",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'AUTOMATED MESSAGE: BOB HAS SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          true),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTICALL:              toBool(process.env.ANTICALL,               true),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
    INSTAGRAM_SESSION:     process.env.INSTAGRAM_SESSION || '',
};
