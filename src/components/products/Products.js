import React from "react";
import ItemCard from "./CartItem";
import data from "./ProductsData";

function Products() {
  return (
    <>
      <div
        className="card album  bg-light  py-3"
        style={{ width: "100%", height: "603px" }}
      >
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
          <div className="row justify-content-between">
            {data.productData.map((item, index) => {
              return (
                <ItemCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
