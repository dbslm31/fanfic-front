import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Story from '../views/story/Story';
import CreateStory from "../views/create/CreateStory";
import UpdateStory from "../views/update/UpdateStory";


function AppRoutes() {

    // const isMobile = useMediaQuery("(max-width: 600px)");



    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/story/:id"
                element={
                    <Story />
                }
            />
            <Route
                path="/story/create"
                element={
                    <CreateStory />
                }
            />
            <Route
                path="/story/update/:id"
                element={
                    <UpdateStory />
                }
            />
        </Routes>
    );
}

export default AppRoutes;