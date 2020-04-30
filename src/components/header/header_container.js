import React from 'react';
import {connect} from   'react-redux';
import taskReducer from '../../redux/task_reducer'
import Header from './heder'
let mapStateToProps = (state) => {
  return {
    myTask:state.task.myTask
    
  }
}

const HeaderContainer = connect (mapStateToProps)(Header);
export default HeaderContainer;