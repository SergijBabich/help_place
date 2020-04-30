import React from 'react';
import s from './formControl.module.css';
import { Field, reduxForm} from 'redux-form';

const FormControl = ({input, meta, child,...props}) => {
   const hasError = meta.touched && meta.error;
   return (
     <div className={s.form_control+" "+ (hasError? s.error: "")}>
      <div className={s.error_border}>
        {props.children}
      </div>
      <div>
      { hasError && <span className={s.error}>{meta.error}</span>}
      </div>
     </div>
   )
}

export const Input = (props) => {
   const {input, meta, value, child,...restProps} = props;
   return <FormControl {...props}> <input {...input} {...props} {...restProps} /> </FormControl>
}
export const Textarea = (props) => {
   const {input, meta, child,...restProps} = props;
   return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const createField = (name, placeholder, component, type, ) =>
 {
  return (
     <Field name={name}
  placeholder={placeholder}
  component={component}
  type={type} />
)
}
