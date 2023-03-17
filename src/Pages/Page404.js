import {Link} from "react-router-dom";

function Page404(){

    return(
        <>
            <h4>Sayfa bulunamadı</h4>
            <Link to="/">Ana Sayfaya Dön</Link>
        </>
    )
}

export default Page404