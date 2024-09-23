import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
const artistList = artists.map(artist => <ArtistDetails key={artist.name} artist={artist} />);

  return (
    <div className="app">
      <ArtistDetails/>
    </div>
  );
}

export default App;
