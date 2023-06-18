import { ProductCard } from "../components"
import { MockedProducts } from "../consts/mock-products"

export const HomeView = () => {
    // this is where you would call a server for data (mocked for now)
    // this is called a 'side effect'
    
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