import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({options,qustion}) => {
    const{correctAnswer}=qustion;
    // console.log(options)
    
    const clicked=(id)=>{
        if (correctAnswer===options){
            toast("well done right ans")
        
        }
        else{
            toast("wrong ans try again")
        }
       
        // console.log('this is clicked',id)
    }
    // console.log(options)
    return (
        <div>
            <div onClick={()=>clicked(options)} className='m-5'>
                {options}
                <ToastContainer />
            </div>
        </div>
    );
};

export default Options;