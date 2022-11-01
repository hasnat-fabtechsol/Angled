import React from 'react';

function TableHeader({headers,color='#32abe2'}) {
    return (
     
    

<thead className="text-white" style={{backgroundColor:color}}>
<tr>
{headers.map((item) => {
  
  return  <th scope="col">{item}</th>
})
}
</tr>
</thead>
  

   
    );
}

export default TableHeader;