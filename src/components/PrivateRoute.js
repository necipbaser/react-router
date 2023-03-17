import {useAuth} from "../Context/AuthContext";
import {Navigate} from "react-router-dom";

export default function PrivateRoute({children}){
    //kullanıcı oturum açmış mı bak,
    //eğer oturum açmamışsa yönlendirme yap
    //oturum açmışsa children ı render et  props.children

    const {user} = useAuth()

    if(!user){
        return <Navigate to="/auth/login" />
    }
    
    return children


}
