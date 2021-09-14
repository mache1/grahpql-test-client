import { searchQuery } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import HotelCard from '../HotelCard/HotelCard';

const SearchResults = (props) => {
    const { loading, error, data } = useQuery(searchQuery, {
        variables: {
            name: "Villa Olga",
            locationId: ""
        }
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <div>
            {data.hotelByName.map(i => {
                return <HotelCard
                    key={i.id}
                    name={i.name}
                    imageAddress={i.imageAddress}
                    rating={i.rating}
                    location={i.location} />
            })}
        </div>
    );
}

export default SearchResults;