import React, {useState, useEffect} from 'react';
import t from './main.module.css/main.module.css'
import TakeTaskModalWindowRedux from '../takeTaskDo/takeTaskModalWindow'
const ShowMyTaskListInTheMain = (props)=> {


    const [isTake, setTake] = useState(false);   
    const takeTaskToDo = () => {
        setTake(true)
    }
    const collectExecutorInformation = (value) => {
        props.appointAnExecutor(value.nameExecutor.trim(), value.surnameExecutor.trim(), value.phoneExecutor, value.executionTime, value.commentExecutor.trim(), props.taskList._id);
        setTake(false)     
    }
   
    const canceltakeTaskToDo = () => {
        setTake(false)
    }

  

   return (
       <>
       {isTake && <TakeTaskModalWindowRedux  onSubmit={collectExecutorInformation} canceltakeTaskToDo={canceltakeTaskToDo} /> }
       <div className={ props.taskList.nameExecutor? t.task__container_pending: t.task__container_my_task }>
           <div className={t.container__info}>
                <div className={t.info_left_side}>
                    <div className={t.items}> 
                        <p className={t.items_color}>Имя</p>
                        <p className={t.info_user}>{props.taskList.name}</p>      
                    </div>
                    <div className={t.items}>
                        <p className={t.items_color}>Город</p>
                        <p  className={t.info_user} >{props.taskList.sity}</p>
                    </div>
                    <div className={t.items}>
                        <p className={t.items_color}>Телефон</p>
                        <p  className={t.info_user} >+380{props.taskList.phoneClient}</p>   
                    </div>
                </div>
                <div className={t.info_right_side}>
                    <div>
                         {props.taskList.nameExecutor? <div className={t.check__ready_color}> В процессе выполения</div>:
                            <h3 className={t.show__my_task}>моя задача</h3>}
                    </div>
                  
                    <div className={t.info__pay}>
                        <p className={t.items_color} >Вознаграждение</p>
                        {props.taskList.checkPay? <p className={t.check__pay_color}> Бесплатно </p>: <p className={t.check__pay_color}>Платно</p> }
                    </div>
                </div>

           </div>
           <div className={t.container__input}>
                 <h3 className={t.input__title}>Описание</h3>
                <p className={t.input__text}>{props.taskList.desctiption}</p>
           </div>
       </div>
    </>
    )
}





export default ShowMyTaskListInTheMain;