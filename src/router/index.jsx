import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App'
import { Layout } from '../pages'

const Router = () => {
    const router = createBrowserRouter (
        createRoutesFromElements(
            <Route path='/' element={<App/>}>
                <Route index element={<Layout/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
}

export default Router