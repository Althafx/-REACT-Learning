import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 5000;

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Replace these with your Spotify Developer credentials
const CLIENT_ID = "0b156c1f251447aba49b8e687da12855";
const CLIENT_SECRET = "72cfc5e74fb24d36a05204dbf27af9b1";

// Step 1: Get access token from Spotify
async function getSpotifyToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}

// Step 2: Fetch multiple songs (from playlist or search)
app.get("/api/songs", async (req, res) => {
  try {
    const token = await getSpotifyToken();

    // You can replace this with any popular playlist ID or search query
    // Example: get 20 pop songs
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=genre:pop&type=track&limit=20",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    // Extract useful info
    const songs = data.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists.map((a) => a.name).join(", "),
      album: track.album.name,
      cover: track.album.images[0]?.url || "",
      preview: track.preview_url, // short audio preview link
    }));

    res.json(songs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Spotify backend running on http://localhost:${PORT}`);
});
