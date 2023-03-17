import {useParams} from "react-router-dom";

function Post(){
    const {url} = useParams();

    console.log(url)

    return(
        <div>
            Post page
        </div>
    )
}

export default Post