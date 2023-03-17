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
function App() {
  return (
    <div className="App">
     <>
        <nav>
            {/*bu şekilde sayfa yenileniyor*/}
            {/*<a href="/">Ana Sayfa</a>*/}
            {/*<a href="/contact">İletişim</a>*/}
            {/*<a href="/blog">Blog</a>*/}

            {/*active class vs. eklenmiyor*/}
            {/*<Link to="/">Ana Sayfa</Link>*/}
            {/*<Link to="/contact">İletişim</Link>*/}
            {/*<Link to="/blog">Blog</Link>*/}

            {/*<NavLink to="/" className={({isActive})=>isActive && 'aktif'}>Ana sayfa</NavLink>*/}

            <NavLink to="/">Ana sayfa</NavLink>
            <NavLink to="/contact">İletişim</NavLink>
            <NavLink to="/blog">Blog</NavLink>

        </nav>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/blog" element={<BlogLayout />}>
                 <Route index={true} element={<Blog />} />
                 <Route path="categories" element={<Categories />}/>
                 {/*<Route path="post/:id/:url" element={<Post />}/>*/}
                 <Route path="post/:url" element={<Post />}/>
                 <Route path="*" element={<Blog404 />}/>
             </Route>

             <Route path="*" element={<Page404 />}/>
         </Routes>
     </>
    </div>
  );
}

export default App;
