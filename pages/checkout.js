import React from "react";
import Link from "next/link";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = ({cart, subTotal, addToCart, removeFromCart}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-2xl">1. Delivary Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-5">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea name="" id="" cols="30" rows="4" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" placeholder="Enter your phone no" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" placeholder="City" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" placeholder="State" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-5">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
            <input type="text" id="pincode" name="pincode" placeholder="Pin Code" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-2xl">2. Review Your Cart Item(s) & Pay</h2>
      <div className="sideCart bg-violet-100 p-8 m-3">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 mx-2 font-semibold">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                  <div className="flex font-semibold items-center justify-center w-1/3">
                    <AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="cursor-pointer text-violet-500" />
                    <span className="mx-2 text-sm">{cart[k].qty}</span>
                    <AiOutlinePlusCircle onClick={()=>{addToCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="cursor-pointer text-violet-500" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="font-bold">Subtotal: {subTotal}</span>
      </div>
      <div className="mx-4">
      <Link href={'/checkout'}><button className="flex m-2 text-white bg-violet-500 border-0 py-2 px-2 focus:outline-none hover:bg-violet-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />
         Pay ₹{subTotal}
      </button></Link>
      </div>
    </div>
  );
};

export default Checkout;
