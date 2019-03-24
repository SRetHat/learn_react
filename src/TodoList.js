import React, {Component, Fragment} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        };
    }

    //在jsx的语法中this.state.inputValue为js的变量，那么如果想要在jsx的语法中使用js的表达式或者
    //变量那么必须得使用{this.state.inputValue}的形式
    render() {
        return (
            <Fragment>
                {/*对于Fragment为占位符， 在react中以大写字母开头的是react的组件，而以小写字母开头的是普通的标签 */}
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    {/*在html中label的作用是：扩大点击的区域， 当我们点击输入内容的时候，此时光标直接定位到
                    输入框的上， 和下面的id配合使用*/}
                    <input
                        id = 'insertArea'
                        className= 'input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                    //dangerouslySetInnerHTML={{__html : item}}
                                >
                                    {/*一般情况下使用item就足够了，但是如果输入框中输入含有标签的数据的时候
                                     我们希望它以标签的形式输出，即输入框输入 <li>hello<li/> 我们希望它数的就是
                                     通过li标签修饰的hello 那么此时就用到了dangerouslySetInnerHTLM这个函数了*/}
                                    {item}
                                </li>
                            )
                        })
                        //如果不使用<li key={index}>，那么页面上会报key不唯一的警告，这是因为在循环渲染的时候
                        //key的值需保持唯一
                    }
                </ul>
            </Fragment>
        )
    }

    //在类中的方法，被调用到了，并且其中需要改变this.state中的内容，那么必须在函数
    //调用处，绑定this,此时的this才是有效的，否则是undefine的
    handleInputChange(e) {
        this.setState({inputValue: e.target.value})
    }

    //[...this.state.list, this.state.inputValue] 为展开运算符，...this.state.list为原先this.state.list中的内容，
    //它会将原先的数组展开，然后将其和this.state.inputValue的值拼接。
    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);           //删除数组中的某一项可以使用splice函数,即从index下表开始删除1个数据
        this.setState({list: list});
        //不能通过this.state.list直接修改其中内容，应该重新拷贝一份，在拷贝的数据上进行进一步的修改后，
        //通过setSate来改变this.state.list的值，这样的话后面进行性能优化的时候会很方便。
    }
}

export default TodoList;