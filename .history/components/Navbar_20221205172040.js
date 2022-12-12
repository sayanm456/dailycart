import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [dropdown, setDropdown] = useState(false)
  

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center mb-1 my-4 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <a>
            <Image width={200} height={35} src="/logo.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <a>
              <li className="hover:text-violet-500 font-cabin">Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li className="hover:text-violet-500">Hoodies</li>
            </a>
          </Link>
          <Link href={"/pants"}>
            <a>
              <li className="hover:text-violet-500">Pants</li>
            </a>
          </Link>
          <Link href={"/shoes"}>
            <a>
              <li className="hover:text-violet-500">Shoes</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li className="hover:text-violet-500">Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart items-center absolute right-0 top-2 mx-5 cursor-pointer flex">
        <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
       {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-8 bg-violet-400 top-6 rounded-md px-5 w-32">
           <ul>
            <Link href={'/myaccount'}><a><li className="py-2 hover:text-violet-500 text-sm">My Account</li></a></Link>
            <Link href={'/orders'}><a><li className="py-2 hover:text-violet-500 text-sm">Orders</li></a></Link>
            <li onClick={logout} className="py-2 hover:text-violet-500 text-sm">Logout</li>
           </ul>
         </div>}
        {user.value && <MdAccountCircle className="text-xl md:text-2xl mx-4"/>}
        </span>
        {!user.value && <Link href={'\login'}><a>
           <button className='bg-violet-600 px-2 py-1 hover:bg-transparent border border-1 hover:border-violet-500 hover:bg-white-500 hover:text-violet-500 rounded-md text-sm text-white mx-2'>Login</button>
           </a></Link>}
        <AiOutlineShoppingCart onClick={toggleCart} className="sticky text-xl md:text-2xl" />
         
      </div>
      <div ref={ref} className={`w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-violet-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0':'translate-x-full'}`}>
        <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-violet-500"><AiOutlineCloseCircle /></span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 mx-2 font-semibold">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
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
        <div className="font-bold m-2">Subtotal: {subTotal}</div>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex m-2 text-white bg-violet-500 border-0 py-2 px-2 focus:outline-none hover:bg-violet-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />
            Checkout
          </button></Link>
          <button onClick={clearCart} className="flex m-2 text-white bg-violet-500 border-0 py-2 px-2 focus:outline-none hover:bg-violet-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;