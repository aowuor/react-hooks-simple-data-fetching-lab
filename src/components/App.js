// create your App component here
import React, {useState,useEffect} from "react";


function App(){
    const [firstLoading, setFirstLoaing] = useState(false);
    const [images, setImages] = useState([]);
    

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
            setImages(data.message)
            setFirstLoaing(true)
        })
    }, []);

    if(!firstLoading) return <p>Loading...</p>

    return (
        <div>
            <img src={images} alt="A Random Dog"/>
            
        </div>
    );

}

export default App;