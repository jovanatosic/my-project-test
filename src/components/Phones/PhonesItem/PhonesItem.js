import { useContext } from "react";
import PhonesItemForm from "./PhonesItemForm";
import classes from "./PhonesItem.module.css";
import CartContext from "../../../context/cart-context";

const PhonesItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      discountPercentage: props.discountPercentage,
      rating: props.rating,
      stock: props.stock,
      brand: props.brand,
      category: props.category,
      thumbnail: props.thumbnail,
      images: props.images,
    });
  };
  return (
    <div>
      <li className={classes.phones}>
        <div>
          <div className="product-item bg-white">
            <div className={classes.category}>{props.category}</div>
            <div className="product-item-info fs-14">
              <div className="product-item-img">
                <img
                  className={classes.img}
                  src={props.thumbnail}
                  alt={props.title}
                />
              </div>
              <div className={classes.brand}>
                <span>Brand: </span>
                <span>{props.brand}</span>
              </div>
              <div>
                <span className={classes.discount}>
                  ({props.discountPercentage}% Off)
                </span>
              </div>
            </div>
          </div>
          <h3 className={classes.title}>{props.title}</h3>
          <div className={classes.price}>{price}</div>
          <hr/>
          <div>
            <span>Rating: </span>
            <span>{props.rating}</span>
          </div>
          <div>
            <span>Stock: </span>
            <span>{props.stock}</span>
          </div>
        </div>
        <div>
          <PhonesItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </div>
  );
};

export default PhonesItem;
