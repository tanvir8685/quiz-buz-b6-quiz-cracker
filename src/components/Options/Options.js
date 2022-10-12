import React from 'react';

const Options = ({options,qustion}) => {
    // console.log(qustion)
    const clicked=(id)=>{
        alert('you are choice',id)
        console.log('this is clicked',id)
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