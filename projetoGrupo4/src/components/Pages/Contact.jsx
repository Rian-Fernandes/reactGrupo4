import { useEffect } from 'react';
function Contact(){
    useEffect ( () =>{
        document.body.style = 'background: #576851';
    },[])
    return<h1>Contact</h1>
}

export default Contact