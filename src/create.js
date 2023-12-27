import { useState } from "react";
import { useHistory} from "react-router-dom";


const  Create= () => {
    const [ title, setTitle ] = useState("hello"); //initial value is empty string
    const [body, setBody ] = useState('');
    const [author, setAuthor ] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //gives us access to the browser history

    //default behaviour of form is to refresh the page
    const handleSubmit = (e) => {

        e.preventDefault(); //prevents page from refreshing
        //creating the new blog object
        const blog = {title, body, author};
        setIsPending(true);
        
        
        

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() =>{
        console.log("new blog added");
        setIsPending(false);
        //history.go();
        history.push('/');    //redirects to home page //include the route in paranthesis
       
    } )

    
    }


    return (  
        <div className="create">
            <h2>Add a New Blog</h2>

            <div>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                    <input 
                        type="text" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                <label>Blog body</label>
                    <textarea 
                        required
                        value={body}
                        onChange={(e)=> setBody(e.target.value)}> 
                    </textarea>

                <label>Blog author</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>

                  
                { !isPending &&<button>Add blog</button> }
                { isPending &&<button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
            </div>
           
        </div>
    );
}

 
export default Create;