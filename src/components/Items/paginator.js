import React, {useState} from 'react';
import t from '../main/main.module.css/main.module.css';
import us from './paginator.module.css'
import TakeTaskModalWindowRedux from '../takeTaskDo/takeTaskModalWindow'
import ShowMyTaskListInTheMain from '../main/showMyTaskListInTheMain '
import TaskList  from '../main/taskList';
const Paginator = (props) =>  {

    const [isActive, setActive] = useState(false);
    let pagesCount = Math.ceil(props.totalUsersCount / props.page);
    let pages = [];
    let portionSize = 10;
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber -1) * portionSize +1;
    let rigthPortionNumber = portionNumber  * portionSize;
    if (props.users.phoneExecutor) {
      props.getItems(1, 10);
  }

  let newTaskList=  props.users.filter(o => !props._id.some(oo => o._id === oo));
  let showMyTaskList=  props.users.filter(o => props._id.some(oo => o._id === oo));
 
 
        console.log(showMyTaskList)
     return (
        <div>
        {newTaskList.map((u, index) =>
          <div class=''>
              <TaskList  taskList = {u} index={index} _id={props._id} getItems={props.getItems} appointAnExecutor={props.appointAnExecutor}/>
         </div>
      )}

     {showMyTaskList.map((u, index) =>
          <div class=''>
              <ShowMyTaskListInTheMain  taskList = {u} index={index} _id={props._id} getItems={props.getItems} appointAnExecutor={props.appointAnExecutor}/>
         </div>
      )}
      <div className={us.paginator_container}>
        {portionNumber > 1 &&
          <button className={us.paginator_button_rigth}  onClick={ () => { setPortionNumber(portionNumber-1) }}></button>}
        {pages.filter(p => p>=leftPortionNumber && p<= rigthPortionNumber).map(el =>{
            return   <span className={props.pageCount === el && us.selected__page}
            onClick = {() => {props.getItems(el)}}>{el}</span>
        })}
        {portionCount> portionNumber &&
      <button  className={us.paginator_button}   onClick = {()=> { setPortionNumber(portionNumber+ 1) }}> </button> }
      </div>
    </div>
  )
  }

export default Paginator;