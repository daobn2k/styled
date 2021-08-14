import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const productList = useSelector((state) => state.allProducts.products)

    const ListItem = productList.map( (product,index) => {
        
        <div className={'four column wide'} key ={index}>
            <div className={'ui link cards'}>
                <div className={'card'}>
                    <div className={'image'}></div>
                    <div className={'content'}>
                        <div className={'header'}>{product.title}</div>
                    </div>
                </div>
            </div>
        </div>
    })
 
    return (
        
        <>
        {ListItem}
        </>
    )
}

export default ProductComponent
