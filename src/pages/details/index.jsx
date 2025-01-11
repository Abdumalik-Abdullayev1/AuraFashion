import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../components/products'

const Index = () => {
    const { id } = useParams()
    const product = products.filter((item)=> item.id == id)
    console.log(id, product, "detail");
    return (
        <div>
            {product.map((item, index) => (
                <div key={index}>
                    <img src={item.imgSrc} alt="Shorts" />
                </div>
            ))}
        </div>
    )
}

export default Index
