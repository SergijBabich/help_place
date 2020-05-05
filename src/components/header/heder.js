 import React from 'react';
import History from '../history/history'
import {NavLink} from 'react-router-dom';
import h from './header.module.css';
import MyList from '..//mylist/mylist'
 const Header = (props)=> {
    return (
        <div className={h.container}>

            <div className={h.item__container} >
                    <div className={h.NavLink}><NavLink to='/my-list' activeClassName=''>  Мои задачи </NavLink> </div>
                    <div className={h.NavLink}><NavLink to='/start' activeClassName=''>  Список дел </NavLink> </div>
                    <div className={props.myTask.length? h.nav_active: h.NavLink}><NavLink to='/active' activeClassName=''>  Мои дела </NavLink> </div>
                    
                   
            </div>
               </div>
     )
 }

 export default Header;