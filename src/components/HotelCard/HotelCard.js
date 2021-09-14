import './HotelCard.scss';

const HotelCard = (props) => {
    const { name, rating, location, imageAddress } = props;
    const { country, state, city } = location;

    return (
        <div className="hotel-card" style={{
            backgroundImage: `url(${imageAddress})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <h2 className="hotel__name">{name}</h2>
            <p className="hotel__location">{city}, {state}, {country}</p>
            <p className="hotel__rating">{rating}</p>
        </div>
    );
}

export default HotelCard;