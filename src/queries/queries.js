import { gql } from '@apollo/client';

const dataQuery = gql`
    query {
        hotels {
            id
            name
            rating
            imageAddress
            location {
                country
                state
                city
            }
        }
    }
`;

const searchQuery = gql`
    query($name: String, $locationId: $ID) {
        hotelByName(name: $name) {
            id
            name
            rating
            imageAddress
            location {
                country
                state
                city
            }
        }
    }
`;

export {
    dataQuery,
    searchQuery
};