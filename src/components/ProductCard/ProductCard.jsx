import { onAdd } from '../../util/local-storage-util'
import './ProductCard.css'

// defaults to type = product
export const ProductCard = ({ title, price, imgSrc, type = 'product' }) => {
    const handleAddProduct = () => {
        onAdd(title, price, imgSrc)
    }

    return (
        <div className="product-card">
            <p>{title}</p>
            <img class="product-image"
                    src={imgSrc}
                    alt="TODO"
            />
            {type === 'product' && 
                <>
                    <p>{price}</p>
                    <button onClick={handleAddProduct}>Add</button>
                </>
            }
        </div>
    )
}