import React, {useEffect, useState, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getSlotDetails } from '../actions/slotBookingAction';
import { useNavigate, useParams } from 'react-router-dom';
import Print from '../components/Print';

const SlotBooking = () => {

    const history = useNavigate();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, area } = useSelector((state) => state.slot);

    const [pincode, setPincode] = useState("");

    


    const pincodeSubmit = (e)=>{
        e.preventDefault();
        dispatch(getSlotDetails(pincode));
    }

    console.log(area);




  return (
   <>
    <div>
                <form action="#"  onSubmit={pincodeSubmit}>
                    <h1>Enter pincode</h1>
                    <input 
                        type="text" 
                        name='pincode' 
                        placeholder='Enter Pincode' 
                        required 
                        value={pincode}
                        onChange={(e)=>setPincode(e.target.value)}
                        />
                    
                    <button>Enter pincode</button>
                </form>
    </div>
    <div>
        {area && 
                area.map((item)=> ( 
                <Print areaName={item.areaName} />
                ))}
    
        
    </div>
   </>
  )
}

export default SlotBooking