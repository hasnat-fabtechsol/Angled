import React from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

function Table({data,headers,headercolor,hideId,btn}) {
 
    return (
        <div>
       
             {data.length>0&&<table className="table">

       <TableHeader headers={headers} color={headercolor} />
  
    <tbody>
   
      {
       data.map((item,index)=><TableItem key={index,item} item={item}  hideId={hideId} btn={btn} />)
      }
    </tbody>
  </table>}
        </div>
    );
}

export default Table;

