import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App'
import {
    Layout,
    Details,
    Cart,
    Casual,
    Formal, 
    Party, 
    Gym,
    Login,
    Register,
    Verify,
    Admin
} from '../pages'
import { Dashboard, Product, Settings } from "../pages/admin-page";

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App />}>
                <Route index element={<Layout />} />
                <Route path="/:id" element={<Details />} />
                <Route path="/:id/:id" element={<Cart />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/casual" element={<Casual />} />
                <Route path="/formal" element={<Formal />} />
                <Route path="/party" element={<Party />} />
                <Route path="/gym" element={<Gym />} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="verify" element={<Verify/>}/>
                <Route path="admin-layout" element={<Admin/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="products" element={<Product/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Router