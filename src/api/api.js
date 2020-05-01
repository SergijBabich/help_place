import React from 'react';
import {  connect} from 'react-redux';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://warm-cove-14456.herokuapp.com/',

});
//http://localhost:3012/
//https://warm-cove-14456.herokuapp.com/
export const putTask = {
    createNewTask(name, descValue, checkbo, sity, phone) {
        return instance.post(`clients`, {
            name,
            descValue,
            checkbo,
            sity,
            phone
        }).then(response => {
            console.log(response.data);      
            return response.data;
        })
    },

    /* change card execution data*/
    putTaskForMake(nameExecutor, surnameExecutor, phoneExecutor, executionTime, commentExecutor, id) {
        return instance.put(`profile/${id}`, {
            nameExecutor,
            surnameExecutor,
            phoneExecutor,
            executionTime,
            commentExecutor
        }).then(response => {
            console.log(response.data);
            
            return response.data;
        })
    },
    /* get all  my task list  */
    getMyListTask(JSONStringListId) {
        console.log(JSONStringListId);
        
        return instance.get(`/get-my-list?id=${JSONStringListId}` , {
            JSONStringListId    
        }).then(response => {
            console.log(response);
            
            return response.data;
        });

    },
    /* delene task which was coplited */
    deleteUserTask(id) {
        return instance.delete(`/clients/${id}`).then(response => {
            return response.data;
        });

    }

    
}


export const getUserTask = {

    
    getItems(page) {
        console.log(page);
        return instance.get(`/clients?pageCount=${10}&page=${page}`, {
            page
        }).then(response => {
            return response.data;
        })
    }
}

