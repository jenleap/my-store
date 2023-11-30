import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../components/product-page.component"
import { CartPage } from "../components/cart-page.component"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <ProductPage />} />
            <Route path="/cart" element={ <CartPage /> } />
        </Routes>
    )
}