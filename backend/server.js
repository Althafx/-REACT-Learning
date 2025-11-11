import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config';


const app = express();
app.use(cors());
const PORT = 5000;

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Replace these with your Spotify Developer credentials

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Check if environment variables are loaded
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing Spotify credentials in .env file');
  process.exit(1);
}

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
      "https://api.spotify.com/v1/search?q=anime&type=track&limit=40",
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


app.get("/api/songs/:id", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const { id } = req.params;

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.error) {
      return res.status(404).json({ error: "Track not found" });
    }

    const songDetails = {
      id: data.id,
      name: data.name,
      artist: data.artists.map(a => a.name).join(", "),
      album: data.album.name,
      releaseDate: data.album.release_date,
      popularity: data.popularity,
      imageUrl: data.album.images[0]?.url,
      previewUrl: data.preview_url,
      spotifyUrl: data.external_urls.spotify,
    };

    res.json(songDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch song details" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Spotify backend running on http://localhost:${PORT}`);
});
