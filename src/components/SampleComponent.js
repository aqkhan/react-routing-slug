import React  from 'react';
const SampleComponent = ({location}) => {
    return(
        <div>
            <h2>I am a sample component</h2>
            <p>Sample props: {location.query._id}</p>
        </div>
    )
};

export default SampleComponent;