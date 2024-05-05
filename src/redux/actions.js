import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction('tasks/addTask', (text) => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});


export const deleteTask =   createAction('task/deleteTsk')

export const toggleCompleted = createAction("tasks/toggleCompleted");


export const setStatusFilter =createAction("filters/setStatusFilter");