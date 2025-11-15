function Card({ songName, artist, album, imageUrl, popularity }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-blue-300  w-64 duration-500 ease-in-out hover:scale-104" >
      <div className="p-7   dark:bg-gray-700">
        <img className="rounded-lg"
          src={imageUrl || 'https://via.placeholder.com/300'} 
          alt={songName}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
      </div>
      <div className="flex flex-col p-4 ">
        <h2 className="font-poppins text-lg">{songName || 'Unknown Song'}</h2>
        <p className="artist-name">Artist: {artist || 'Unknown Artist'}</p>
        <p className="album-name">Album: {album || 'Unknown Album'}</p>
        {popularity && <p className="popularity">★ {popularity}</p>}
      </div>
    </div>
  );
}

export default Card;
