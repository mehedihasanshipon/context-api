import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    
    const [count,setCount] = useContext(CategoryContext)
    return (
        <div>
            <h2>This is Header.Count: {count} </h2>
            <button onClick = {() => setCount('Laptop')}>Laptop</button>
            <button onClick = {() => setCount('Mobile')}>Mobile</button>
            <button onClick = {() => setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Header;