import React, { Component } from  'react';
/*
 * App.js其实就是react得组件，他需要引入父类Comonent, 在render中的标签都是JSX的语法
 * 在JSX的语法中要是用自定义的组件，那么其首字母必须大写，比如组件index.js中，其中使用
 * 我们这里的App组件，那么引用和使用组件的时候，其首字必须大写.所以在react中若看到的标签
 * 是以大写字母开头的那就是自定义的组件，如果是以小写字母开头的，eg：<div></div> 它就是
 * 原始的html5的标签。
 */
class App extends Component{
  render(){
    return (
        <div>
          hello ,dell lee
        </div>
    );
  }
}

export default App;