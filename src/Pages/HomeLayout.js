import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";

function HomeLayout(){
return(
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

            <NavLink className="navlink" to="/">Ana sayfa</NavLink>
            <NavLink to="/contact">İletişim</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/profile">Profil</NavLink>
            <Outlet />

        </nav>
    </>
)
}

export default HomeLayout