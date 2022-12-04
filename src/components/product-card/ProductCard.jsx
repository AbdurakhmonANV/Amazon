import React from 'react';
import c from './ProductCard.module.css';


const ProductCard = ({ image, title, linkURL, linkLable }) => {
  return (
      <div className={c.ProductCard}>
        <h2 className={c.product_title}>{title}</h2>
        <img className={c.product__image} src={image} alt="" />
        <br/><br /> 
        <a className={c.product_link} href={linkURL}>{linkLable}</a>
      </div>
  )
}

export default ProductCard