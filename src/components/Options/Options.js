import React from 'react';

const Options = ({options}) => {
    console.log(options)
    const clicked=(id)=>{
        console.log('this is clicked',id)
    }
    console.log(options)
    return (
        <div>
            <div onClick={()=>clicked(options)} className='m-5'>
                {options}
            </div>
        </div>
    );
};

export default Options;