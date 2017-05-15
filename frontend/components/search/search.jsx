import React from 'react';
import { withRouter } from 'react-router';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import DatePicker from 'react-datepicker';
import {START_DATE, END_DATE} from 'react-dates/constants';
import {hashHistory} from 'react-router';
import moment from 'moment';
import Autosuggest from 'react-autosuggest';

// import '../../../app/assets/stylesheets/components/datepicker.css';
//
//import RoomMap from '../room_map/room_map';
//import {RoomIndex} from '../rooms/room_index';

const suggestions = [
  {
    text: 'Bespin'
  },
  {
    text: 'Coruscant'
  },
  {
    text: 'Dagobah'
  },
  {
    text: 'Endor'
  },
  {
    text: 'Hoth'
  },
  {
    text: 'Mustafar'
  },
  {
    text: 'Naboo'
  },
  {
    text: 'Tatooine'
  },
  {
    text: 'Yavin IV'
  }
];


const getSuggestions = value => {
  const inputValue = value.toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : suggestions.filter(lang =>
    lang.text.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.text;

const renderSuggestion = suggestion => {
  return (
  <div>
    {suggestion.text}
  </div>
  )
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      city: '',
      party_size: 0,
      focus: null,
      value: '',
      suggestions: []
    };
    this.update = this.update.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }



  handleForm(e) {
    e.preventDefault();
    const startDate = this.state.startDate ? this.state.startDate._d : new Date();
    const endDate = this.state.endDate ? this.state.endDate._d : new Date();
    const searchFilters = {city: this.state.city, startDate: startDate, endDate: endDate, party_size: this.state.party_size}
    this.props.fetchRooms(searchFilters).then(hashHistory.push('/search'));
  }

  update(field) {
    const startDate = this.state.startDate ? this.state.startDate._d : '';
    const endDate = this.state.endDate ? this.state.endDate._d : '';
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleFocusChange(focus){
    this.setState({focus});
  }

  onChange(event, { newValue }) {
    event.preventDefault();
    this.setState({
      value: newValue,
      city: newValue
    });
  };

  onSuggestionsFetchRequested({ value }) {
   this.setState({
     suggestions: getSuggestions(value)
   });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  // handleChangeStartDate(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  // handleChangeEndDate(date) {
  //   this.setState({
  //     endDate: date
  //   });
  // }



  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Input a city (e.g. "Tatooine")',
      value,
      onChange: this.onChange
    };


    return(
      <div className="search-form-row">
        <form id="search-form1" className="search-form">
          <ul className="search-form-ul">
            <li className="search-form-location">

              <br />

              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                className="search-fields"
                className="location-input"
                name="city" id="search-location"
              />
            </li>

            <li className="search-form-dates">

              <br />

              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focus}
                onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
                onFocusChange={this.handleFocusChange}
              />
            </li>

            <li className="search-form-guests">

              <br />

              <select className="search-fields" className="guests-input" name="party_size" id="search-guests" placeholder="2 Guests" onChange={this.update('party_size')}>
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5">5 guests</option>
                <option value="6">6 guests</option>
                <option value="7">7 guests</option>
                <option value="8">8 guests</option>
                <option value="9">9 guests</option>
                <option value="10">10 guests</option>
                <option value="11">11 guests</option>
                <option value="12">12 guests</option>
              </select>
            </li>
            <li className="li-button">
              <button type="submit" onClick={this.handleForm} className="search-button">
                <span>Search</span>
              </button>
            </li>
          </ul>

        </form>


      </div>
    );

  }
}

export default Search;
