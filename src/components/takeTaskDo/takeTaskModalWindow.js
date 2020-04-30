
import React, {useState} from 'react';
import {connect} from   'react-redux';
import { Field, reduxForm } from 'redux-form';
import t  from './executing.module.css'
import {required , maxLengthCreator, minLengthCreator} from '../../utils/validator';
import {Input, Textarea} from '../../utils/formControl.js';
import { createNumberMask, createTextMask } from 'redux-form-input-masks';

const maxLengthTextAtea = maxLengthCreator(256);
const maxLengthInput = maxLengthCreator(15);

const TakeTaskModalWindow = (props)=> {   
    const phoneMask = createTextMask({
        pattern: '+380 (99) 999-99-99',
      });
    return (
        <div>
      
          <form   className={t.form__createtask} onSubmit = {props.handleSubmit}>
                <div>
                    <p>Введите ваше имя</p>
                    <Field component={Input}     validate={[required, maxLengthInput]}   class={t.textbox} name='nameExecutor' />   
                </div>
                <div>
                    <p>Введите вашу фамилию</p>
                    <Field component={Input}     validate={[required, maxLengthInput]}  class={t.textbox}  name='surnameExecutor' /> 
                </div>
                <div>
                    <p>Введите ваш номер телефона</p>
                    <Field component={Input}  {...phoneMask}    validate={[required]}  class={t.textbox}  name='phoneExecutor'  /> 
                </div>
                <div>
                    <p>Выберите период выполнения</p>
                    <Field component='Select'   name='executionTime' >
                          <option></option>
                          <option value="0:00-4:00">0:00-4:00</option>
                          <option value="4:00-8:00">4:00-8:00</option>
                          <option value="8:00-12:00">8:00-12:00</option>
                          <option value="12:00-16:00">12:00-16:00</option> 
                          <option value="16:00-20:00">16:00-20:00</option> 
                          <option value="20:00-24:00">20:00-24:00</option>     
                    </Field> 
                    
                </div>
                <div>
                    <p>Оставить коментарий</p>
                    <Field component={Textarea}    validate={[required, maxLengthTextAtea]}   class={t.message}  name='commentExecutor'  /> 
                </div>
                <div className={t.button__items}>
                     <div>
                        <button className={t.button} >Подтвердить</button>
                    </div>
                    <div>
                        <button className={t.button +" "+ t.button_cancel} onClick={props.canceltakeTaskToDo}>Отменить</button>
                    </div>
                </div>
         </form>
        </div>
     )
 }
 
 
 const TakeTaskModalWindowRedux = reduxForm({
     form:'descriptionTask'
   })(TakeTaskModalWindow)


   export default TakeTaskModalWindowRedux