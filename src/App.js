import {Route, Routes} from "react-router-dom";

import AllVehiclesPage from "./pages/AllVehicles";
import FavoritesPage from "./pages/Favorites";
import NewVehiclePage from "./pages/NewVehicle";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home";
function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllVehiclesPage/>}>
                </Route>
                <Route path='/newvehicle' element={<NewVehiclePage/>}>
                </Route>
                <Route path='/favorites' element={<FavoritesPage/>}>
                </Route>
                <Route path ='/home' element={<HomePage/>}>
                </Route>
            </Routes>
        </Layout>
    );
}


export default App;
