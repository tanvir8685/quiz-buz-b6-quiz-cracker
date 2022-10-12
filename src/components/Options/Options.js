import React from 'react';

const Options = ({options,qustion}) => {
    const{correctAnswer}=qustion;
    // console.log(options)
    
    const clicked=(id)=>{
        if (correctAnswer===options){
            alert('you are right',id)
        
        }
        else{
            alert('wrong ans')
        }
       
        // console.log('this is clicked',id)
    }
    // console.log(options)
    return (
        <div>
            <div onClick={()=>clicked(options)} className='m-5'>
                {options}
            </div>
        </div>
    );
};

export default Options;