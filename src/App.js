import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import HotelCards from './components/HotelCards/HotelCards';
import { useState } from 'react';
import SearchResults from './components/SearchResults/SearchResults';

const App = (props) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = () => {
        setFormSubmitted(true);
    };

    return (
        <div className="app">
            <header>

            </header>
            <SearchForm submitForm={submitForm} />
            <HotelCards formSubmitted={formSubmitted} />
            {/* <SearchResults /> */}
        </div>
    );
}

export default App;
