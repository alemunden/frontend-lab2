import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
const artistList = ArtistDetails.map(product => <Product key={product.name} product={product} />);

  return (
    <div className="app">
      <ArtistDetails/>
    </div>
  );
}

export default App;
