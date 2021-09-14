import './HotelCards.scss';
import { useQuery } from '@apollo/client';
import { dataQuery } from '../../queries/queries';
import HotelCard from '../HotelCard/HotelCard';

const HotelCards = (props) => {
    let { loading, error, data } = useQuery(dataQuery);
    if (loading)
        return <h1>Loading...</h1>
    if (error)
        return <h1 style={{ color: 'red' }}>Error occured</h1>;

    return data.hotels.map(i => {
        return <HotelCard
            key={i.id}
            name={i.name}
            imageAddress={i.imageAddress}
            rating={i.rating}
            location={i.location} />
    });
};

export default HotelCards;