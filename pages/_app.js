import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  
  
  useEffect(() => {
     router.events.on('routeChangeStart', ()=>{
        setProgress(40)
     })
     router.events.on('routeChangeComplete', ()=>{
        setProgress(100)
     })
     try {
        if(localStorage.getItem("cart")){
           setCart(JSON.parse(localStorage.getItem("cart")))
           saveCart(JSON.parse(localStorage.getItem("cart")))
        }
      
     } catch (error) {
        console.log(error);
        localStorage.clear()
     }
     const token = localStorage.getItem('token')
     if(token){
         setUser({value: token})
         setKey(Math.random())
     }
  }, [router.query])
  
  const logout = ()=>{
     localStorage.removeItem('token')
     setUser({value: null})
     setKey(Math.random())
     router.push('/')
  }

  const ISSERVER = typeof window === "undefined";
  const saveCart = (myCart)=>{
    if(!ISSERVER){
        localStorage.setItem("cart", JSON.stringify(myCart))
        let subt = 0;
        let keys = Object.keys(myCart)
        for(let i=0; i<keys.length; i++ ){
           subt += myCart[keys[i]].price * myCart[keys[i]].qty;
      }
      setSubTotal(subt)
    }
  }
  const addToCart = (itemCode, qty, price, name, size, variant)=>{
     let newCart = cart;
     if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty + qty
     }
     else{
        newCart[itemCode] = {qty: 1, price, name, size, variant}
     }
     setCart(newCart)
     saveCart(newCart)
  }

  const byeNow = (itemCode, qty, price, name, size, variant)=>{
     let newCart = { itemCode: {qty: 1, price, name, size, variant}};
     
     setCart(newCart)
     saveCart(newCart)
     console.log(newCart)
     router.push('/checkout')

  }

  const clearCart = ()=>{
     setCart({})
     saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
       newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
       delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)
 }



  return (
    <>
      <LoadingBar
      color='#8F00FF'
      progress={progress}
      waitingTime={400}
      onLoaderFinished={() => setProgress(0)}
      />
      <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}  subTotal={subTotal}/>
      <Component byeNow={byeNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} subTotal={subTotal}/>
      <Footer />
    </>
  );
}

export default MyApp;
