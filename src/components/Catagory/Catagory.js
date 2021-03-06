import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';

const allProducts = [{name:'HP',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},
{name:'Nokia',category:'mobile'},{name:'Samsung',category:'mobile'},{name:'Redmi',category:'mobile'},
{name:'Canon',category:'camera'},{name:'Sony',category:'camera'},{name:'Nikkon',category:'camera'}]

const Catagory = () => {
    const [category] = useContext(CategoryContext);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const matchProduct = allProducts.filter(pd => pd.category.toLowerCase()===category.toLowerCase());
        setProducts(matchProduct);
    },[category])
    return (
        <div>
            <h2>Your selected category: {category} </h2>
            {
                products.map(pd => <CatagoryDetail product = {pd} />)
            }
        </div>
    );
};

export default Catagory;