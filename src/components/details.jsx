import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./loading";


function Details() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState("");
  console.log("Fetching song details for ID:", id);


  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await fetch(`http://localhost:5000/api/songs/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setSong(data);
      } catch (err) {
        console.error("Error fetching song details:", err);
        setError(err.message);
      }
    }

    fetchSong();
  }, [id]);

  if (error) return <p className="error">❌ {error}</p>;
  if (!song) return <Loading />;

  return (
    <div className="details-container">
      <img src={song.imageUrl} alt={song.name} className="album-cover" />
      <div className="song-info">
        <h1>{song.name}</h1>
        <p><strong>Artist:</strong> {song.artist}</p>
        <p><strong>Album:</strong> {song.album}</p>
        <p><strong>Release Date:</strong> {song.releaseDate}</p>
        <p><strong>Popularity:</strong> {song.popularity}</p>
      </div>
      {song.previewUrl && (
        <div className="preview-player">
          <audio controls>
            <source src={song.previewUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
      <a href={song.spotifyUrl} target="_blank" rel="noreferrer" className="spotify-link">
        Open in Spotify
      </a>
    </div>
  );
}

export default Details;
