import './SearchForm.scss';
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchForm = (props) => {
    const locationRef = useRef();
    const hotelNameRef = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(locationRef.current.value);
        console.log(hotelNameRef.current.value);
        props.submitForm();
    }

    return (
        <Form className="search-form" onSubmit={onFormSubmit}>
            <h2>Search for locations or hotels.</h2>
            <Container>
                <Form.Group controlId="location">
                    <Form.Control ref={locationRef} type="text" placeholder="Where are you going?" />
                    {/* <Autocomplete ref={locationRef} placeholder="Where are you going?" /> */}
                </Form.Group>
                <Form.Group controlId="hotel-name">
                    <Form.Control ref={hotelNameRef} type="text" placeholder="Name of the hotel?" />
                </Form.Group>
                <Button type="Submit">Search</Button>
            </Container>
        </Form>
    );
}

export default SearchForm;