import { ProductCard } from "../components"
import { MockedProducts } from "../consts/mock-products"

export const HomeView = () => {
    const products = MockedProducts.map(product => {
        return (
            <ProductCard title={product.title} 
                imgSrc={product.imgSrc}
                price={product.price}
            />
        ) 
    })

    return (
        <>
            <h1>Home View</h1>
            {products}
        </>
    )
}