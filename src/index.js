import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import TodoList from './TodoList'
/*
 * 本文件为本项目的入口文件，它用来渲染相关的内容，并且把内容通过react-dom显示
 * 到标签id为'root'的下面
 *
 * 这里的引入的react看起来引入它是没有必要的，因为底下并没有使用react，
 * 但是他是有问题的，因为底下的<App /> 它使用react中的JSX的语法
 */
ReactDOM.render(<TodoList />, document.getElementById('root'));
