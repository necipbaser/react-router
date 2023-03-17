import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Categories from "./Pages/Blog/Categories";
import Post from "./Pages/Blog/Post";
import "./App.css";
import Blog from "./Pages/Blog/Blog"
import BlogLayout from "./Pages/Blog/index";
import Page404 from "./Pages/Page404";
import Blog404 from "./Pages/Blog/Blog404"
import Profile from "./Pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./Pages/Auth/AuthLayout";
import Login from "./Pages/Auth/Login";
import HomeLayout from "./Pages/HomeLayout";

function App() {
    return (
        <div className="App">
            <>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index={true} element={<Home/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="blog" element={<BlogLayout/>}>
                            <Route index={true} element={<Blog/>}/>
                            <Route path="categories" element={<Categories/>}/>
                            {/*<Route path="post/:id/:url" element={<Post />}/>*/}
                            <Route path="post/:url" element={<Post/>}/>
                            <Route path="*" element={<Blog404/>}/>
                        </Route>
                        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                    </Route>
                    <Route path="/auth" element={<AuthLayout/>}>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </>
        </div>
    );
}

export default App;
