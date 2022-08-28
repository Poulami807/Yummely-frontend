import React from 'react';
import {useParams} from 'react-router-dom';

function Temp() {
  const {type} = useParams();
  return (
   <>
   <div className='my-5'>
   </div>
   </>
  )
}

export default Temp;