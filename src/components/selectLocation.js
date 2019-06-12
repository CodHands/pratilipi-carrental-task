import React from 'react'

export default ({ location, getLocation }) => {
    return (
        <div className="col-md-6 col-sm-6">
            <div className="form-group">
                <select defaultValue="" className="form-control" onChange={(e) => getLocation(e)}>
                    <option value="" disabled>----Select Location----</option>
                    {location.map((ln, i) => <option key={i}>{ln}</option>)}
                </select>
            </div>
        </div>
    )
}
