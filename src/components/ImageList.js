import ImageShow from './ImageShow';
function ImageList({ images }) {
    const renderImages = images.map(img => {
        return <ImageShow link={img.links.download} key={XPathResult.id}></ImageShow>
    })

    return <div>
        {renderImages}
    </div>
}

export default ImageList;