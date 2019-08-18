import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

var placeholder = document.createElement("li"); 
placeholder.className = "placeholder";

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input: '',
    todos: [
      { id: 0, text: ' 1', checked: false },
      { id: 1, text: ' 2', checked: true },
      { id: 2, text: ' 3', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  constructor(props) { 
    super(props); 
    this.state = {...props}; 
  } 
    
  dragStart = (id) => {
    this.dragged = e.currentTarget; 
    e.dataTransfer.setData('text/html', this.dragged); 
    e.dataTransfer.effectAllowed = 'move'; 
  } 
    
  dragEnd = (id) => { 
    this.dragged.style.display = 'block'; 
    this.dragged.parentNode.removeChild(placeholder); // update state 
    var data = this.state.colors; 
    var from = Number(this.dragged.dataset.id); 
    var to = Number(this.over.dataset.id); 
    if(from < to) to--; 
    data.splice(to, 0, data.splice(from, 1)[0]); 
    this.setState({colors: data}); 
  } 
    
  dragOver = (id) => {
    e.preventDefault(); 
    this.dragged.style.display = "none"; 
    if(e.target.className === 'placeholder') return; 
    this.over = e.target; 
    e.target.parentNode.insertBefore(placeholder, e.target); 
  }

  render() {
  const { input, todos } = this.state;
    const {
      handleKeyPress,
      handleRemove,
      dragOver,
      dragEnd,
      dragStart,
      handleChange,
      handleCreate,
      handleToggle
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;