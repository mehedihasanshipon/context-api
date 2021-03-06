import React from 'react';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';

const Catagory = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>This is category </h2>
            <CatagoryDetail count={count} />
        </div>
    );
};

export default Catagory;