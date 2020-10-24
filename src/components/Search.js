import React, {useState} from 'react';
import './../assets/css/search.css';
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <div className='guests'>
                <h2>Number of guests <PeopleIcon /></h2>
                <div className='input_wrapper'>
                    <input min={0} defaultValue={2} type="number" />
                </div>
                <Button onClick={() => history.push('/search')}> Search Airbnb </Button>
            </div>
        </div>
    )
}

export default Search