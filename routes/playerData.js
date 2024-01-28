const express = require('express');
const axios = require('axios');
const router = express.Router();

// Function to fetch Steam ID for a player based on their username
async function fetchSteamId(username) {
  // Implement the logic to fetch Steam ID here
  // Example: Make an HTTP request to Steam API or your database
  // Return the Steam ID
}

// Function to fetch Discord ID for a player based on their username
async function fetchDiscordId(username) {
  // Implement the logic to fetch Discord ID here
  // Example: Make an HTTP request to Discord API or your database
  // Return the Discord ID
}

router.get('/online-players', async (req, res) => {
  try {
    const response = await axios.get('https://185.240.134.206:30120/players.json');
    const onlinePlayers = response.data;

    // Iterate through onlinePlayers and fetch Steam and Discord IDs
    for (const player of onlinePlayers) {
      // Fetch the values for each player
      const name = player.username;
      const discordId = await fetchDiscordId(player.username);
      const steamId = await fetchSteamId(player.username);
      const ipAddress = player.ip;

      // Create a new object with the desired order of attributes
      const playerInfo = {
        name,
        discordId,
        steamId,
        ipAddress,
      };

      // Replace the original player object with the modified one
      Object.assign(player, playerInfo);
    }

    // Now, onlinePlayers contains the desired order of attributes
    res.json({ onlinePlayers });
  } catch (error) {
    console.error('Error fetching online players:', error);
    res.status(500).json({ error: 'Failed to fetch online players' });
  }
});

module.exports = router;
