import {useState, useEffect} from 'react';

function useFetch(url) {
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchTracks() {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setTracks(data || []); 
            }
            catch(err){
                console.error("Error fetching tracks:", err);
                setError(err.message);
            }
        }
        fetchTracks();
    },[url]);
    return {tracks, error};
}

export default useFetch;