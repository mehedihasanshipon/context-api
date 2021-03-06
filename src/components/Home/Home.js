import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    const count =  useContext(CategoryContext);
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