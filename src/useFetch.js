
import {useState,useEffect} from "react";
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore";

const useFetch = (dbName) => {

const [data ,setData]= useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

const getData= async () => {
    const dataRes = await getDocs(collection(db, dbName));
    const rawData = dataRes.docs.map((doc) => ({...doc.data(), id: doc.id}));
    setData(rawData);
};

useEffect(()=> {
    getData(dbName).then(() => {
        setIsPending(false);
        console.log('data fetched');
    })
    .catch(err =>{
        setError(err.message);
        setIsPending(false);
    
    });
//     const abortCont = new AbortController();

//     setTimeout ( () => {
//         fetch(url,{signal: abortCont.signal})
//         .then(res => {
//             if (!res.ok){
//                 throw Error('could not fetch the data for that resource');
//                 }
//         console.log(res);    
//         return res.json();
//         })
//         .then(data => {
//             setIsPending(false);
//             console.log(data);
//             setData(data);         
//             setError(null);
//         })
//         .catch(err =>{
//             if (err.name === 'AbortError'){
//                 console.log('fetch aborted');
//             }else{
//             setError(`hey hey ${err.message}`);
//             setIsPending(false);}
//         });

//  },1000);

// return () => abortCont.abort();
 },[dbName]);

return {data,isPending,error};
}

export default useFetch;
