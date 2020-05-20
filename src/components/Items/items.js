import React from 'react';
import Paginator from './paginator.js';
const Items = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.page);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
     return (
        <div>
        <div>
        <Paginator
               users={props.users}
               page={props.page}
               pageCount={props.pageCount}
               totalUsersCount={props.totalUsersCount}
               getItems = {props.getItems}
               appointAnExecutor={props.appointAnExecutor}
               _id ={props._id}
                />
        </div>
    </div>
  )
}

export default Items;