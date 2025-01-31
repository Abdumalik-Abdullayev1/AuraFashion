import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App'
import {
    Layout,
    Details,
    Cart,
    Casual,
    Formal, 
    Party, 
    Gym
} from '../pages'

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App />}>
                <Route index element={<Layout />} />
                <Route path="/:id" element={<Details />} />
                <Route path="/:id/:id" element={<Cart />} />
                <Route path="/casual" element={<Casual />} />
                <Route path="/formal" element={<Formal />} />
                <Route path="/party" element={<Party />} />
                <Route path="/gym" element={<Gym />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Router