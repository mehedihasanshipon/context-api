import React from 'react';

const CatagoryDetail = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>This is category detail:{count} </h4>
        </div>
    );
};

export default CatagoryDetail;