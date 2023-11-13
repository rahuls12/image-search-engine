import axios from "axios";

const searchImages = async (query) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aeDeM9-P8mGf9TrJY1vxPX-CXCufzZQeaxczY7R05nk'
        },
        params: {
            query: query
        }
    });

    return response.data.results;
}

export default searchImages;