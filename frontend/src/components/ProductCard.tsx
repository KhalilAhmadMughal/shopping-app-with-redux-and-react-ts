import React, { useState } from "react";

import { IProduct } from "../utilities/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  totalCounter,
} from "../store/cartSlice";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const ProductCard = (props: { product: IProduct }) => {
  const { product } = props;
  const dispatch = useDispatch();

  const productDataState = useSelector(
    (state: any) => state.cartReducer.cartItems
  );

  const [addToCartSate, setAddToCartSate] = useState(false);

  dispatch(totalCounter(product)); // calling the totallCounterReducer

  const addToCartHandler = (item: IProduct) => {
    dispatch(addToCart(item));
    setAddToCartSate(true);
  };
  const incrementHandler = (item: IProduct) => {
    dispatch(increaseQuantity(item));
  };

  const decrementHandler = (item: IProduct) => {
    dispatch(decreaseQuantity(item));
  };

  const removeHandler = (item: IProduct) => {
    dispatch(removeItem(item));
    setAddToCartSate(false);
  };

  return (
    <section className="mx-auto flex flex-col w-[280px] h-[350px] rounded-lg  bg-[rgba(0,0,0,.1)] hover:scale-105 hover:ease-in-out hover:duration-500">
      <div className="w-full h-[60%] rounded-lg ">
        <img
          className="h-full w-full rounded-lg"
          src={product.pic}
          alt="Product pic"
        />
      </div>
      <div className="px-4 mt-2 flex-col w-full">
        <div className=" flex justify-between items-center w-full">
          <h2 className="capitalize w-[83%] h-full line-clamp-1">
            {product.name}
          </h2>
          <p className="flex-1 flex items-center justify-center text-[12px] text-green font-semibold">
            {product.price} Rs.
          </p>
        </div>
      </div>
      <div className="px-4 mb-auto">
        <p className="text-[rgba(0,0,0,.5)] w-full text-xs line-clamp-2 leading-4">
          {product.description}
        </p>
      </div>
      <div className="p-2 flex w-full justify-between items-center">
        <button
          onClick={() => {
            addToCartHandler(product);
          }}
          className={`${
            addToCartSate ? "hidden" : ""
          } basis-full rounded-md hover:bg-gradient-secondary hover:text-purple p-1 text-white bg-gradient-primary font-bold`}
        >
          {addToCartSate ? "Increase Quantity" : "Add to Cart"}
        </button>
        <div
          className={`${
            addToCartSate ? "flex" : "hidden"
          } basis-full justify-between items-center`}
        >
          <button
            onClick={() => removeHandler(product)}
            className="basis-[50%] rounded-md hover:bg-gradient-secondary hover:text-purple p-1 text-white bg-gradient-primary font-bold"
          >
            Remove Item
          </button>
          <div className="basis-[30%] flex gap-2 items-center">
            <div className="w-full flex flex-col items-center">
              <p className="text-sm">Quantity</p>
              <div className="flex gap-2 justify-center items-center">
                <AiOutlineMinusCircle
                  className="hover:cursor-pointer hover:bg-purple hover:text-white rounded-full"
                  onClick={() => decrementHandler(product)}
                />
                <p>
                  {productDataState.length === 0
                    ? 0
                    : productDataState.map((item: IProduct) => (
                        <span key={item.id}>
                          {item.id === product.id && item.quantity}
                        </span>
                      ))}
                </p>
                <AiOutlinePlusCircle
                  className="hover:cursor-pointer hover:bg-purple hover:text-white rounded-full"
                  onClick={() => incrementHandler(product)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
