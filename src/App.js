import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
function App(){
    const[images, setImages] = useState([]);
const handleSubmit = async (searchTerm)=>{
    const result = await searchImages(searchTerm);
    setImages(result);
    // console.log(result);
};

    return <div>
        <SearchBar onSubmit={handleSubmit}></SearchBar>
        
            <ImageList images={images}></ImageList>
        
    </div>
}

export default App;

// links.html