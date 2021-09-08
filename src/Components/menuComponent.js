import { Media, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { useEffect, useState } from "react";
import DishDetail from "./DishDetailComponent";
import {DISHES} from "../const/hwM3_kd5EeiV-Ap8VLXT-A_87d2bc70477911e8ac49a50cea1c6260_dishes"
function Menu() {

  

  const [dishes,setDishes] = useState([""]);

  useEffect(()=>{
    setDishes(DISHES)
  },[])

  const [selectedDish, setSelectedDish] = useState(null);


  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card>
          <CardImg
            src={dish.image}
            alt={dish.name}
          ></CardImg>
          <CardImgOverlay onClick={()=>setSelectedDish(dish)}>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      {selectedDish!=null&&<DishDetail dish={selectedDish}/>}
    </div>
  );
}

export default Menu;
