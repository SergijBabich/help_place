import React, {useState} from 'react';
import us from './Paginator.module.css';
import firstIcon from '../../components/img/boy.png';
const Paginator = (props) =>  {
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
    console.log(props.page);
     return (
        <div>
        {props.users.map(u =>
          <div class={us.users__wrapper}>
           <div class={us.users__container}>
             <div class={us.container__img}>
               <img src={firstIcon} alt="" />
             </div>
             <div class={us.container__info}>
               <span class={us.login_user}>@{u.login}</span>
               <div class={us.container__name}>
                 <span>{u.name} </span><br />
                 <span>{u.surname}</span>
               </div>
               <div class={us.container__lvl}>
                 <span>Count - {u.level}</span>
               </div>
             </div>
           </div>
         </div>
      )}
      <div className={us.paginator_container}>
        {portionNumber > 1 &&
          <button className={us.paginator_button_rigth} onClick={ () => { setPortionNumber(portionNumber-1) }}></button>}
        {pages.filter(p => p>=leftPortionNumber && p<= rigthPortionNumber).map(el =>{
            return   <span className={props.pageCount === el && us.selected__page}
            onClick = {() => {props.getUsers(el)}}>{el}</span>
        })}
        {portionCount> portionNumber &&
      <button  className={us.paginator_button} onClick = {()=> { setPortionNumber(portionNumber+ 1) }}> </button> }
      </div>
    </div>
  )
  }

export default Paginator;
