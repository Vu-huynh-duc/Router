import { HashRouter, Route, Routes } from 'react-router-dom';


import Home from "../../pages/Home";
import Counter from '../../pages/Counter';
import Todo from '../../pages/Todo';
import Profile from '../../pages/Profile';
import Comments from '../../pages/Comments';
import Buttons from '../../pages/Buttons';
import Weather from '../../pages/Weather';
const AppRoutes = () => {
    return (
        <>
            <HashRouter>                        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/weather" element={<Weather />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default AppRoutes;
