function Card({ songName, artist, album, imageUrl, popularity }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-blue-300  w-64 h-100 " >
      <div className="p-7   dark:bg-gray-700">
        <img className="rounded-lg"
          src={imageUrl || 'https://via.placeholder.com/300'} 
          alt={songName}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
         {<p className="popularity absolute text-green-400 top-1 right-2 text-sm">★ {popularity}</p>}
      </div>
      <div className="flex flex-col p-4 ">
        <h2 className="font-poppins text-lg">{songName || 'Unknown Song'}</h2>
        <p className="artist-name">Artist: {artist || 'Unknown Artist'}</p>
        <p className="album-name">Album: {album || 'Unknown Album'}</p>
       
      </div>
    </div>
  );
}



export function withBadge(Component) {


  return function EnhancedComponent(props) {

    const popularity = Number(props.popularity ?? 0);

    let badge = null;
    let badgeClass = "bg-yellow-400 text-black";

    if (popularity >= 80) {
      badge = "Popular";
      badgeClass = "bg-yellow-400 text-black";
    } else if (popularity < 30) {
      badge = "Underrated";
      badgeClass = "bg-blue-500 text-white";
    }

    return (
      <div className="relative duration-500 ease-in-out hover:scale-104">
        {badge && (
          <span className={`absolute top-0 left-0 px-2 py-1 text-xs font-bold rounded-md ${badgeClass}`}>
            {badge}
          </span>
        )}
        <Component {...props} />
      </div>
    );
  };
}

export default Card;
