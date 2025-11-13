import { useState, useEffect } from "react";
import Card from "./card";
import ShimmerCard from "./shimmer";
import { SEARCH } from "../utils/img";
import {Link} from 'react-router-dom'
import onlinecheck from "../utils/useOnlineCheck";
import useFetch from "../utils/useFetch.js";



function Body() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTracks, setFilteredTracks] = useState([]);
  const isOnline = onlinecheck();
  const {tracks, error} = useFetch("http://localhost:5000/api/songs")




  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  }

  const handleSearchClick = () => {
    const filteredTracks = tracks.filter((track) => track.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredTracks(filteredTracks);
  }

  
  if (!isOnline) {
    return <h1 style={{ textAlign: "center", marginTop: "100px", fontFamily:"-moz-initial", color:"white"}}>⚠️ please check your internet connection...</h1>;
  }

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

      <div className="searchContainer">
        <input className="searchBar" type="text" placeholder="Search songs..." value={searchQuery} onChange={handleSearch} />
          <button className="searchButton" onClick={handleSearchClick} ></button>
        </div>

      <div className="cards">
      {Array.isArray(filteredTracks.length > 0 ? filteredTracks : tracks) && (filteredTracks.length > 0 ? filteredTracks : tracks).map((track) => (
          <Link key={track.id} to={`/details/${track.id}`}><Card
            
            songName={track.name}
            artist={track.artist}
            album={track.album}
            imageUrl={track.cover}
            popularity={track.preview ? '⭐' : null}
          /></Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
