import { useState, useEffect } from "react";
import Card from "./card";
import ShimmerCard from "./shimmer";
import {Link} from 'react-router-dom'
import onlinecheck from "../utils/useOnlineCheck";
import useFetch from "../utils/useFetch.js";
import {LOGO} from "../utils/img.js";


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
      <div className="flex flex-wrap justify-center m-13 items-center gap-8  mt-30 mb-6 ">
      <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
      <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
       <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
       <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
       <ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/>
     
      </div>
      </>
    )
  }




  return (
    <div className="flex flex-col justify-center items-center bodyContainer">

      <div className="m-5 rounded-lg gap-3 flex justify-center items-center searchContainer">
        <input type="text" placeholder="Search songs..." value={searchQuery} onChange={handleSearch}   className="w-full px-4 py-2 rounded-xl bg-white shadow-md border border-blue-400
                 font-poppins text-gray-800 placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                 transition-all duration-200"/>
          <button className="bg-purple-500 h-10  w-14 flex justify-center rounded-lg duration-300 ease-in-out
            hover:scale-105 cursor-pointer  " onClick={handleSearchClick} ><img className="w-100% p-2 " src={LOGO} alt="" /></button>
        </div>

      <div className="flex shadow-2xl flex-wrap justify-center items-center gap-6 mt-6 mb-6">
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
