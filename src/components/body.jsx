import { useState, useEffect } from "react";
import Card from "./card";
import ShimmerCard from "./shimmer";
import { SEARCH } from "../utils/img";


function Body() {
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  }
  const handleSearchClick = () => {
    const filteredTracks = tracks.filter((track) => track.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredTracks(filteredTracks);
  }





  return (
    <div className="bodyContainer">

      <div className="searchContainer">
        <input className="searchBar" type="text" placeholder="Search songs..." value={searchQuery} onChange={handleSearch} />
          <button className="searchButton" onClick={handleSearchClick} ></button>
        </div>

      <div className="cards">
      {Array.isArray(filteredTracks.length > 0 ? filteredTracks : tracks) && (filteredTracks.length > 0 ? filteredTracks : tracks).map((track) => (
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
