import {useAuth} from "../../Context/AuthContext";
import {useNavigate} from "react-router-dom";

function Login() {

    const {setUser} = useAuth();
    const navigate = useNavigate();
    const loginHandle = () => {
        setUser({
            id: 1,
            username: "necip",
        })
        navigate('/profile')
    }

    return (
        <>
            giriş sayfası <b/>
            <button onClick={loginHandle}>Giriş yap</button>
        </>
    )
}

export default Login