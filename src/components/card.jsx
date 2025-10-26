function Card({ songName, artist, album, imageUrl, popularity }) {
  return (
    <div className="card">
      <div className="card-image">
        <img 
          src={imageUrl || 'https://via.placeholder.com/300'} 
          alt={songName}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
      </div>
      <div className="card-info">
        <h2 className="song-title">{songName || 'Unknown Song'}</h2>
        <p className="artist-name">Artist: {artist || 'Unknown Artist'}</p>
        <p className="album-name">Album: {album || 'Unknown Album'}</p>
        {popularity && <p className="popularity">★ {popularity}</p>}
      </div>
    </div>
  );
}

export default Card;
