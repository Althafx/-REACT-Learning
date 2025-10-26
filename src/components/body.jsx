import { useState, useEffect } from "react";
import Card from "./card";
import ShimmerCard from "./shimmer";

function Body() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("http://localhost:5000/api/songs");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Fetched data:', data);
        setTracks(data || []); // ensure we always have an array
      } catch (err) {
        console.error("Error fetching tracks:", err);
        setError(err.message);
      }
    }

    fetchTracks();
  }, []);

  if (error) {
    return <div>Error loading tracks: {error}</div>;
  }

  if (tracks.length === 0) {
    return (
      <>
      <div className="shimmer-container">
      <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
      <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
      </div>
      </>
    )
  }

  return (
    <div className="bodyContainer">
      <div className="searchbar">
        <input type="text" placeholder="Search songs..." />
      </div>

      <div className="cards">
        {Array.isArray(tracks) && tracks.map((track) => (
          <Card
            key={track.id}
            songName={track.name}
            artist={track.artist}
            album={track.album}
            imageUrl={track.cover}
            popularity={track.preview ? '⭐' : null}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
