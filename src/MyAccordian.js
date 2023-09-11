import React, { useState } from 'react';
const MyAccordian = ({question,answer}) => {
    const [show,setshow]=useState(false);
    const Callfun=()=>{
        setshow(!show);
    }
    return (
        <>
           <div className='main-heading'>
           <p onClick={Callfun}>
           {show?"➖":"➕"}</p>
           <h3>{question}</h3>
           </div>
           {show && <p className='answers'>{answer}</p> }
           
        </>
    );
}
export default MyAccordian;