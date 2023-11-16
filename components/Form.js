import React, { useState } from 'react';

const Form = ({ location, setlocation }) => {
    const [typedLocation, setTypeLocation ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setlocation(typedLocation)
        setTypeLocation('');
    }
    return(
        <div className = "form">
        <form onSubmit={handleSubmit}>
            <label className = "city">
                City:
                <input type="text" value={typedLocation} onChange={(e) => setTypeLocation(e.target.value)}/>
            </label>
            <button className = "btn btn-primary" type="submit">
            Submit
            </button>
        </form>
    </div>
    )
}
export default Form;