import HoverCard from "../Components/hovercard";
import ImageGallery from "../Components/imagegallery";
import ImageSlider from "../Components/imageslider";
import GalleryImages from "../Components/gallery";
import PhotoThree from "../Components/PhotoThree";

function Gallery(){
    return(
        <div>
            <HoverCard />
            {/*<div className="p-4"><ImageSlider /></div>*/}
            <ImageGallery /> 
            {/* <GalleryImages /> */}
            <PhotoThree />
        </div>
    )
}
export default Gallery