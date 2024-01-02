import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {db} from "./firebase";
import {deleteDoc,doc} from "firebase/firestore";

const BlogDetails = () => {
    const { id } = useParams();
    const currentID = id;
    const { data:blogList, error, isPending } = useFetch('blog'); //now we have access to id coz we used use params abov
    const history = useHistory();

    let blog = null;

    if (blogList !== null){
        blog = blogList.find(blog => blog.id === id);
    }

    const handleDelete= (id) => {
        const postDoc = doc(db, "blog", currentID);
        deleteDoc(postDoc);
        history.push("/"); //redirect to home page

    }

    return ( 
        <div className="blogdetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div >{blog.body}</div> 
                    <button onClick={handleDelete}>Delete</button> 
                </article>
                )}
        </div>
);
}


export default BlogDetails;

