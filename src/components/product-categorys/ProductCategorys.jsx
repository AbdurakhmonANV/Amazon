import React from 'react'
import c from './ProductCategorys.modul.css';


const ProductCategorys = ({ image, title }) => {
    return (

        <div className={c.ProductImg}>
            <div>
                <img className={c.ProductImg} src={image} alt="" />
            </div>
        </div>

    )
}

export default ProductCategorys