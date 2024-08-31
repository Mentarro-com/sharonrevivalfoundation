import HoverCard from "../Components/hovercard";
import ImageGallery from "../Components/imagegallery";
import ImageSlider from "../Components/imageslider";
import GalleryImages from "../Components/gallery";
import PhotoThree from "../Components/PhotoThree";

function Gallery(){
    return(
        <div>
            <HoverCard />
            <ImageGallery />
            <ImageSlider />
            <GalleryImages />
            <PhotoThree />
        </div>
    )
}
export default Gallery