
import BlogList from './bloglists';
import useFetch from './useFetch';


const Home = () => {

    const{data:blogs,isPending,error} = useFetch('blog');

//   const [blogs ,setBlogs]= useState(null);

//   const [isPending, setIsPending] = useState(true);

//   const [error, setError] = useState(null);
    
// we now dont need this coz we'll be doin it through requests?
// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }

// const [name, setName] = useState('mario');

// moved into useFetch.js to create a custom hook
// useEffect(()=> {
//     setTimeout ( () => {
//         fetch('http://localhost:8000/blogs')
//         .then(res => {
//             if (!res.ok){
//                 throw Error('could not fetch the data for that resource');
//             }
//         console.log(res);    
//         return res.json();
//         })
//         .then(data => {
//         console.log(data);
//         setBlogs(data);
//         setIsPending(false);
//         setError(null);
//         })
//         .catch(err =>{
//             setError(err.message);
//             setIsPending(false);
//         });

// },1000);
// });

    return ( 
<div className="home">
{error && <div>{`error ${error}`}</div>}
{blogs && <BlogList blogs={blogs} title="All blogs!" />}
{isPending && <div>Loading...</div>}

</div>  
        
    
    );
}
 
export default Home;