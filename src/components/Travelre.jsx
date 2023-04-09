import React, { useRef, useEffect, Fragment, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../actions/userAction';
import { useAlert } from 'react-alert';
import './travelre.css'
import { clearErrors } from '../actions/userAction';


// const [image,setImage]=useState('')
// const [url,setUrl]=useState('')


       
const Travelre = () => {
    const [image,setImage]=useState('')
    const [url,setUrl]=useState('')

    const addinpdata=async (e)=>{

   

        const formdata=new FormData();
        formdata.append('file',image)
        formdata.append("upload_preset","j7hjcv76")
        formdata.append("cloud_name","dsojdaybz")
    
        const res1=await fetch('https://api.cloudinary.com/v1_1/dsojdaybz/image/upload',{
          method:"post",
          body:formdata
        })
        
        const ImgData=await res1.json()
        const url1=ImgData.url
        setUrl(url1);
    
        console.log("iMAGE uRL!!!!!!!!!!! "+ImgData.url)
    
    }

    
const handleImageInput=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0]);
}
const imageUrl="";


    
  return (
    <>
        <div className='container' id='main'>
            <div className='travelform'>
                <form action="#"  >
                    <h1>Travel Reimbursement</h1>
                    <input 
                        type="text" 
                        name='amount' 
                        placeholder='Enter Amount' 
                        required 
                        />
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Email' 
                        required 
                        />
                    <input 
                        type='file'
                        id='file-input'
                        name='imageStyle' 
                        onChange={handleImageInput}
                        placeholder='imageStyle' 
                        required 
                        />
                    <button type='submit' onClick={addinpdata}>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Travelre