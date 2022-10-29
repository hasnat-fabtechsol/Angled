import React, { cloneElement } from 'react';
function TableItem
({item,onDelete,onEdit,hideId=false,btn}) {
 
    return (

     <tr>
      {Object.entries(item).map(([key, value]) => {
  
    return  key=='id'&&hideId?null:<td>{item[key]}</td>
})}
   {btn&& <td>
        {btn(item)}

    </td>}
    </tr>
 
    );
}

export default TableItem
;