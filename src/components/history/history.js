import React from 'react';
import h from './history.module.css'
const History = (props) => {
       console.log(props);
       
       let showMyTask =   props.myTask.map( el => {
                     return <HistoryItems   el={el}/>
              })
             
       
     return (
       
       <div>
               {showMyTask}      
              {!props.myTask.length && <div>Список дел пуст</div>}
      </div>
  )
}








const HistoryItems = (props) => {
       return (
         <div className={h.container}>
              <div className={h.id__container}>
                     <h3>ID заявки</h3>
                     <h3>{props.el._id}</h3>
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
                                   <td>+380{props.el.phoneClient}</td>        
                            </tr>
                            <tr>
                                   <th>Город</th>
                                   <td>{props.el.sity}</td>        
                            </tr>
                            <tr>
                                   <th>Вознаграждение</th>
                                   <td>{props.el.checkPay? <p>нет</p>: <p>есть</p>}</td>        
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
                            <td>+380{props.el.phoneExecutor}</td>        
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
export default History;