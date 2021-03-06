import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Button,
  Grid,
  Icon,
  Image,
  Label,
  Rating,
} from "semantic-ui-react";
import { selectedProducts,removeSelectedProducts} from "../Redux/Actions/ProductActions";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) => state.setProduct);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log("error", err));
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (id && id !== "")fetchProduct();
    return () => {
      dispatch(removeSelectedProducts())
    }
  }, []);
  console.log(product);
  return (
    <div className="ui grid container">
      {product.length===0 ? (<h2>Loading.........</h2>): (<Grid celled textAlign="center" verticalAlign="middle">
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="parent">
              <div className="child">
                <Image src={product.image} />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="molestatore">
              <h2>{product.title}</h2>
            </div>
            <div className="molestatore">
              <h5>$ {product.price}</h5>
            </div>
            <div className="molestatore">{product.description}</div>
            <div className="molestatore">
              <Label as="a" image>
                <img src="/images/avatar/small/stevie.jpg" alt=""/>
                {product.category}
              </Label>
            </div>
            <div>
              <Button animated="fade" style={{ width: "200px" }}>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
                <Button.Content hidden>Add to Cart</Button.Content>
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>)}
    </div>
  );
}
