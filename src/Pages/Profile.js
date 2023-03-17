import {useAuth} from "../Context/AuthContext";


function Profile() {

    const {setUser}= useAuth();

    const logoutHandle =()=>{
        setUser(false);
        localStorage.removeItem('user')
    }

    return(
        <>
            profil sayfası ss

            <button onClick={logoutHandle}>Çıkış</button>
        </>
    )
}

export default Profile