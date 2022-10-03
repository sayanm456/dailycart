import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const MyAccount = () => {

    const router = useRouter()
    useEffect(() => {
        if(!localStorage.getItem('token')){
           router.push('/')
        }
      
      }, [router.query])
    
  return (
    <div className="container mx-auto">
      <h1 className='text-xl text-center'>Update Your Account</h1>
      </div>
  )
}

export default MyAccount