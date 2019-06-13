import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DayPicker = ({ handleDayChange }) => {

    return (
        <div className="col-md-3 col-sm-3">
            <DayPickerInput
                onDayChange={handleDayChange}
            />
        </div>
    )
}

export default DayPicker;

