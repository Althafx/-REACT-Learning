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
  <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-700 font-poppins">

    <div className="w-full max-w-2xl bg-gray-400 rounded-2xl shadow-lg p-6">

      <img
        src={song.imageUrl}
        alt={song.name}
        className="w-64 h-64 rounded-xl object-cover mx-auto shadow-md"
      />

      <div className="mt-6 text-center space-y-2">
        <h1 className="text-3xl font-semibold text-gray-800">{song.name}</h1>

        <p className="text-gray-600">
          <strong className="text-gray-800">Artist:</strong> {song.artist}
        </p>

        <p className="text-gray-600">
          <strong className="text-gray-800">Album:</strong> {song.album}
        </p>

        <p className="text-gray-600">
          <strong className="text-gray-800">Release Date:</strong> {song.releaseDate}
        </p>

        <p className="text-gray-600">
          <strong className="text-gray-800">Popularity:</strong> {song.popularity}
        </p>
      </div>

      {song.previewUrl && (
        <div className="mt-6">
          <audio
            controls
            className="w-full rounded-lg border border-gray-300 p-2 bg-gray-50"
          >
            <source src={song.previewUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}

      <a
        href={song.spotifyUrl}
        target="_blank"
        rel="noreferrer"
        className="block mt-6 w-full text-center py-3 rounded-xl bg-green-500 text-white font-medium
                   hover:bg-green-600 transition duration-200 shadow"
      >
        Open in Spotify
      </a>

    </div>
  </div>
);
}


export default Details;
