import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/action/productAction';



const ProductList = () => {

    const productList = useSelector((state) => state)
    const dispatch = useDispatch();
  
    const fectProducts = async() =>{

        const res = await axios.get('https://fakestoreapi.com/products')
        .catch(err =>
            {
                console.log("Error" ,err)
            })
        dispatch(setProducts(res.data))
    } 

    useEffect (() => {
            fectProducts()
    },[])
   

    console.log(productList)
    return (
        <div className={"ui grid container"}>
            <ProductComponent ></ProductComponent>
        </div>
    )
}

export default ProductList
