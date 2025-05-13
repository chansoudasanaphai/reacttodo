import React, { useState } from 'react';
 
function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(''); // ລ້າງຄ່າຫຼັງຈາກສົ່ງຟອມ
    }
  };
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ເພີ່ມລາຍການໃໝ່..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">ເພີ່ມ</button>
    </form>
  );
}
 
export default TodoForm;