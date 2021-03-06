import React  from 'react';


const CatagoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is category detail: </h4>
            <p>Selected product: {name} </p>
        </div>
    );
};

export default CatagoryDetail;