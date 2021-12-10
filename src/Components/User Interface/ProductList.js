import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image, Rating } from "semantic-ui-react";
import { allProducts } from "../Redux/Actions/ProductActions";

export default function ProductList() {
  const products = useSelector((state) => state.setAllProduct.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(allProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("before map", products);
  return (
    <div className="ui grid container">
      {products.map((data) => {
        return (
          <div className="four wide column ">
              <Link to={`product/${data.id}`}>
            <div className="ui link cards" key={data.id}>
              <Card style={{height:"550px"}}>
                <div style={{height:"365px", display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Image src={data.image} style={{width:"80%" }} /> </div>
                <Card.Content>
                  <Card.Header>{data.title}</Card.Header>
                  <Card.Meta>
                    $<span className="date">{data.price}</span>
                  </Card.Meta>
                  <Card.Description><Rating icon='star' defaultRating={data.rating.rate} maxRating={5} disabled/> <p>({data.rating.count} users)</p></Card.Description>
                </Card.Content>
              </Card>
            </div></Link>
          </div>
        );
      })}
    </div>
  );
}
