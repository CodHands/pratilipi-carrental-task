import React from 'react'

export default ({ location, getLocation }) => {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <select className="form-control" onChange={(e) => getLocation(e)}>
                    {location.map((ln, i) => <option key={i}>{ln}</option>)}
                </select>
            </div>
        </div>
    )
}
