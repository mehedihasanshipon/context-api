import React from 'react';
import Catagory from '../Catagory/Catagory';

const Home = (props) => {
    const {count} = props;
    const style = {
        border : '1px solid red'
    }
    return (
        <div style = {style}>
            <h2>This is Home. {count} </h2>
            <Catagory count = {count} />
        </div>
    );
};

export default Home;