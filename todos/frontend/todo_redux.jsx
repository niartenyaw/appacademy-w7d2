import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import allTodos from '../reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo, toggleTodo } from '../actions/todo_actions'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", function(){
  const appStore = configureStore();
  window.store = appStore;

  window.allTodos = allTodos;

  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.toggleTodo = toggleTodo;

  ReactDOM.render(<Root store={ appStore } />, document.getElementById('root'));
});
