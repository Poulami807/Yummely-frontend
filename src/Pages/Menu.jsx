import React, { useEffect, useState } from "react";
import MenuCollection from "../Components/Restaurant/MenuCollection";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/image.action";

function Menu() {
  // const [menus, setMenus] = useState([
  //   'https://b.zmtcdn.com/data/menus/148/19521148/eb8280f1cc3789d82d6fb6313336fe68.jpg',
  //   'https://b.zmtcdn.com/data/menus/148/19521148/355a4c54e589dcca05ac6dbd31408740.jpg'
  // ]);

  const [menus, setMenus] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, [reduxState]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
      </div>
    </>
  );
}

export default Menu;