import React, {useEffect, useState} from 'react';
import h from '../history/history.module.css';
import {sity} from '../../utils/sity';      

const MyList = (props) => {

       let JSONStringListId  =  props.myTaskId.toString();

      const handleChange = () => {
            
            props.getMyListTask(JSONStringListId);    
     

       }
       /* можно переписать все через функкомноненту нужно делать обработчик и почсле того покгда сработал он, пришли пропсы их отфильтровать и отобразить!"*/ 
    const handleSubmit = (event) => {
              event.preventDefault();
       }

       const closeTask = (el) => {
             props.removeTaskUser(el);
             props.getMyListTask(JSONStringListId);    
       }
       let  showMyTask =   props.myListTask.map( el => {
              return <MyListItems closeTask={closeTask}  el={el}/>
       })
           return (
 
               <div>
                      <form onSubmit={handleSubmit}>
                            <input type="submit" value='Обновить' className={h.button_update}  onClick={handleChange} /> 
                      </form>
                       {showMyTask}
                     {!props.myListTask.length && <div>Список дел пуст</div>}
             </div>
               )
 
}








const MyListItems = (props) => {
      const  giveStateToCloseFunction = () => {
              props.closeTask(props.el._id)
       }
       return (
         <div className={h.container}>
              <div className={h.id__container}>
                   <div>
                     <h3>Моя заявки</h3>
                     <h3>{props.el._id}</h3>
                   </div>
                   <div>
                          <button className={h.close_task} onClick={giveStateToCloseFunction}>Завершить</button>
                   </div>
                     
              </div>
              <div className={h.table__container}>
                <div className={h.table_items}>
                     <table  border-buttom="1">
                            <caption>Заказчик</caption>                
                            <tr>
                                   <th>Имя</th>
                                   <td>{props.el.name}</td>
                            </tr>
                            <tr>
                                   <th>Телефон</th>
                                   <td>{props.el.phoneClient}</td>        
                            </tr>
                            <tr>
                                   <th>Город</th>
                                   <td>{props.el.sity}</td>        
                            </tr>
                            <tr>
                                   <th>Вознаграждение</th>
                                   <td>{props.el.checkPay}</td>        
                            </tr>

                     </table >
                     <div className={h.client__description}>
                            <p>Описание</p>
                            <p>{props.el.desctiption}</p>
                     </div>
               </div>
       
              <div className={h.table_items}>
              <table border-buttom="1">
                            <caption>Исполнитель</caption>
                     <tr>
                            <th>Имя</th>
                            <td>{props.el.nameExecutor}</td>
                     </tr>
                     <tr>
                            <th>Фамилия</th>
                            <td>{props.el.surnameExecutor}</td>        
                     </tr>
                     <tr>
                            <th>Телефон</th>
                            <td>{props.el.phoneExecutor}</td>        
                     </tr>
                     <tr>
                            <th>Период выполнения</th>
                            <td>{props.el.executionTime}</td>        
                     </tr>
               </table>
               <div className={h.client__description}>
                          <p>Комментарий</p>
                          <p>{props.el.commentExecutor}</p>
                      </div>
              </div>
          </div>
        </div>  
       )
}
export default MyList;