import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import Counter from '@/pages/Counter';
import Todo from '@/pages/Todo';
import Profile from '@/pages/Profile';
import Comments from '@/pages/Comments';
import Buttons from '@/pages/Buttons';
import Weather from '@/pages/Weather';
import PostDetails from '@/pages/PostDetails';
import Post from '@/pages/Post';
import DefaultLayout from '@/layouts/defaultLayout';
import SidebarLayout from '@/layouts/SidebarLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ScrollToTop from '../ScrollToTop';
import Avatar from '@/pages/Avatar';
import PerformanceDemo from '@/pages/PerformanceDemo';
import HOCDemo from '@/pages/HOCDemo';
import RenderProps from '@/pages/RenderProps'
import MyComponent from "@/pages/MyComponent"


const AppRoutes = () => {
    return (
        <>
            <HashRouter>
                <ScrollToTop />

                <Routes>
                    <Route path="/admin" element={<AdminLayout />}></Route>
                    <Route path="/performance-demo" element={<PerformanceDemo />} />
                    <Route path="/hoc-demo" element={<HOCDemo />} />
                    <Route path="/render-props" element={<RenderProps />} />
                    <Route path="/my-component" element={<MyComponent />} />
                    MyComponent
                    

                    <Route element={<DefaultLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/post/:postID" element={<PostDetails />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/avatar" element={<Avatar />} />
                    </Route>

                    <Route element={<SidebarLayout />}>
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/buttons" element={<Buttons />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
};

export default AppRoutes;
