import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import './App.css';
 
function App() {
  // State ຫຼັກສຳລັບເກັບລາຍການ todos
  const [todos, setTodos] = useState([]);
  // State ສຳລັບການກອງລາຍການ (all, active, completed)
  const [filter, setFilter] = useState('all');
  
  // ໂຫຼດຂໍ້ມູນຈາກ localStorage ເມື່ອ Component ຖືກ Mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);
  
  // ບັນທຶກຂໍ້ມູນລົງ localStorage ທຸກຄັ້ງທີ່ todos ປ່ຽນແປງ
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // ຟັງຊັນເພີ່ມລາຍການໃໝ່
  const addTodo = (text) => {
    if (text.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
  };
  
  // ຟັງຊັນໝາຍວ່າລາຍການສຳເລັດ/ບໍ່ສຳເລັດ
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  
  // ຟັງຊັນລຶບລາຍການ
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  
  // ຄຳນວນຈຳນວນລາຍການທີ່ຍັງບໍ່ສຳເລັດ
  const remainingTodos = todos.filter(todo => !todo.completed).length;
  
  // ກອງລາຍການຕາມສະຖານະທີ່ເລືອກ
  const filteredTodos = filter === 'all' 
    ? todos 
    : filter === 'active' 
      ? todos.filter(todo => !todo.completed) 
      : todos.filter(todo => todo.completed);
  
  return (
    <div className="todo-app">
      <h1>ແອັບຈັດການລາຍການ</h1>
      
      <TodoForm addTodo={addTodo} />
      
      <FilterButtons filter={filter} setFilter={setFilter} />
      
      <TodoList 
        todos={filteredTodos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
      
      <div className="todo-stats">
        <p>ລາຍການທີ່ຍັງບໍ່ສຳເລັດ: {remainingTodos}</p>
      </div>
    </div>
  );
}
 
export default App;