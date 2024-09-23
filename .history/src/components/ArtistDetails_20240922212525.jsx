import { artists } from "../best-selling-music-artists";

export default function ArtistDetails(artist) {
    return(
        <div>
            <div>
                <h2>{artist.name}</h2>
                <div>
                    <p>Country: {artist.country}</p>
                    <p>Years active: {artist.years_active}</p>
                </div>
            </div>
        </div>
    )
}