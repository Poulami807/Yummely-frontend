import React, { useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import PhotoCollection from "../Components/Restaurant/PhotoCollection";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/image.action";

function Photos() {
  // const [photos, setPhotos] = useState([
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/dd162b67fea9280d4af6ceb59e4968e5.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/50e943d31d0a48ad2a9065a9c5dc6903.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/5110b0fe11fa36973d79b9f8a80079ca.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/2f4e97385e7f5ece1186217714b3a906.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/e375f482fc0326fa8ffe26408cc0d92a.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/dd162b67fea9280d4af6ceb59e4968e5.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/50e943d31d0a48ad2a9065a9c5dc6903.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/5110b0fe11fa36973d79b9f8a80079ca.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/2f4e97385e7f5ece1186217714b3a906.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/e375f482fc0326fa8ffe26408cc0d92a.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/dd162b67fea9280d4af6ceb59e4968e5.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/50e943d31d0a48ad2a9065a9c5dc6903.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/5110b0fe11fa36973d79b9f8a80079ca.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/2f4e97385e7f5ece1186217714b3a906.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/5/21495/e375f482fc0326fa8ffe26408cc0d92a.jpg",
  // ]);
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  const closeViewer = () => {
    setIsMenuOpen(false);
  };

  const openViewer = (index) => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
}

export default Photos;