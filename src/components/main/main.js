import React, {useState, useEffect, useLayoutEffect} from 'react';
import Sidebar from '../sidebar/sidebar';
import {connect} from   'react-redux';
import { Field, reduxForm } from 'redux-form';
import TaskList  from './taskList';
import ItemsContainer from '../Items/items_container'
import main from './main.module.css/main.module.css'
import {required , maxLengthCreator, minLengthCreator} from '../../utils/validator.js';
import {Input, Textarea} from '../../utils/formControl.js';
import {sity} from '../../utils/sity';     
import { createNumberMask, createTextMask } from 'redux-form-input-masks';
const Main = (props)=> {

    
    const [isActive, setActive] = useState(false);
    const openCteatorTask  = () => {
        setActive(true)
    }
    const getTaskFromUser = (value) => {
           props.createTask(value.name.trim(), value.descValue.trim(), value.checkbo, value.sity, value.phone);
           setActive(false)        
        }

           
    
    const closeTaskWingow = () => {
        setActive(false)
        
    }
   
    useEffect(() => {
            props.getItems(1, 10);

      });

   return (
       <div>
           {  isActive  && <TaskFormRedux onSubmit={getTaskFromUser} closeTaskWingow={closeTaskWingow} />}
           <div className={main.container__button} >
                <button className={main.button__main} onClick = {openCteatorTask}>Создать задачу</button>
           </div>
                    <ItemsContainer   />
       </div>
    )
}


const maxLengthTextAtea = maxLengthCreator(256);
const maxLengthInput = maxLengthCreator(15);
const minLengthPhone = minLengthCreator(9);

const Task = (props)=> {   
    const phoneMask = createTextMask({
        pattern: '+380 (99) 999-99-99',
      });
   /*  нужно вынести вверх, сотрировка городов */ 
   let a  =sity;
    let be = [];
    a.forEach( element =>  {
          be.push(element.name);
    })
    let ka = be.sort();
    /* добавить нормальные названия переменных   */
   return (
       <div className={main.container__field} >
         <form  className={main.form__createtask} onSubmit = {props.handleSubmit}>
            <div className={main.createtask}>Создать задачу</div>  
             <div className="container">
               <div className="container-info">
                       <div>
                        <p>Введите ваше имя</p>
                       <Field component={Input}   class={main.textbox}name='name'  validate={[required, maxLengthInput]} placeholder=' Введите ваше имя' />   
                        <div className={main.pay__checker}>
                              <p> Бесплатно </p>
                              <Field component='input' type="checkbox"   name='checkbo'  />   
                        </div> 
                       </div>                  
                        <Field component='select'  class={main.textbox}  validate={[required]}  name='sity' placeholder='Введите ваш город'> 
                         
                            {
                            ka.map( element =>  {
                                return  <option value={element}>{element}</option>
                            })
                            }
                    </Field>   
                        <Field component={Input}   {...phoneMask}  class={main.textbox}   validate={[required, minLengthPhone]}   name='phone' placeholder='Введите ваш номер леефона' />   
                   </div>
                   <div className="container-area">
                        <div>
                           Описание
                        </div>
                        <Field component={Textarea }   rows="5" cols="80"   validate={[required, maxLengthTextAtea]} class={main.message} name='descValue'  placeholder='Коротко опишите, что нужно сделать' />
                        <div>Максимальное количество символов 256</div>
                   </div> 
                   
             </div>
            <div className={main.button__items}>
                <button className=''  class={main.button} >Подтвердить</button>
                <button className='' class={main.button +" " + main.button_cancel} onClick={props.closeTaskWingow}>Отменить</button>
            </div>
        </form>
       </div>
    )
}



const TaskFormRedux = reduxForm({
    form:'descriptionTask'
  })(Task)


export default Main;