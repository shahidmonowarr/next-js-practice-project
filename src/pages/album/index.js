const Album = ({ albums }) => {
  console.log(albums);
  return (
    <div>
      {albums.map((album) => (
        <div key={album.id} className="card my-3 mx-auto w-96 bg-base-100 shadow-xl">
        <figure><img src={album.url} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{album.title}</h2>
          <p>{album.thumbnailUrl}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Album;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=15"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      albums: data,
    },
  };
};
