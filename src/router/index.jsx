import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App'
import { Layout, Details, Cart } from '../pages'

const Router = () => {
    const router = createBrowserRouter (
        createRoutesFromElements(
            <Route path='/' element={<App/>}>
                <Route index element={<Layout/>}/>
                <Route path="/:id" element={<Details/>}/>
                <Route path="/:id/:id" element={<Cart/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
}

export default Router