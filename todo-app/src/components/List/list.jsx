import React,{useState, useContext, useEffect } from 'react'
import {Pagination} from '@mui/material';


export default function list({list,setting}) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

    const startIndex = (currentPage - 1) * setting.display;
    const endIndex = startIndex + setting.display;
    let displayedItems= list.slice(startIndex, endIndex);
    console.log(displayedItems);



  return (
    <div className='list'>
      {displayedItems.map(item => (
        (setting.hideCompleted? !item.complete : true) && <div className='listItem' key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>

        ))}
        <div className='pagination'>
        <Pagination 
        onChange={handlePageChange} 
        count={Math.ceil(list.length / setting.display)}
        variant="outlined" 
        shape="rounded" />
        </div>
    </div>
  )
}