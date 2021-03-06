import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category,SetCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is Shipment</h2>
            <button onClick = {()=> SetCategory(category +1)}>Increment from shipment</button>
        </div>
    );
};

export default Shipment;