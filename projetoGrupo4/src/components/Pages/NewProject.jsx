import { useEffect } from 'react';

function NewProject(){
    useEffect ( () =>{
        document.body.style = 'background: #576851';
    },[])
    return<h1>NewProject</h1>
}

export default NewProject