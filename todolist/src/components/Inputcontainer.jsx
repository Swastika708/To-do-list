function Inputcontainer({ inputVal, writeTodo, addTodo }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input type="text" value={inputVal} onChange={writeTodo} placeholder="Enter a task..." />
        <button onClick={addTodo}>Add</button>
      </div>
    );
  }
  
  export default Inputcontainer;
  