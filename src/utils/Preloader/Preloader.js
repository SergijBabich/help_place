import React from 'react';
//import ui from '../Users/Users.module.css';
import * as axios from 'axios';
import loader from '../../components/img/spin.gif';

const PreLoader = (props) => {
  return (
      <div>
       <img src= {loader}/>
       </div>
  )
}
export default PreLoader;
