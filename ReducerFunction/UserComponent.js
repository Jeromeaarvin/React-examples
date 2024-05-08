import React from 'react'
import { useReducer,useState } from 'react'


const initialState = {
    name: "John", 
    email:"john@gmail",
    ph_no:"99898989",
    inputs: [],
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_INPUT':
        return {
          ...state,
          inputs: [...state.inputs, action.payload],
        };
      case 'UPDATE_INPUT':
        return {
          ...state,
          inputs: action.payload,
        };
      case 'UPDATE_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'DELETE_INPUT':
        return {
          ...state,
          inputs: state.inputs.filter(input => input.id !== action.payload),
        };
      default:
        return state;
    }
  }
  
  function UserComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPh, setNewPh] = useState("");

    
  
    const handleAddInput = () => {
      const newInput = {
        id: Date.now(), // Generating a unique id for each input
        value: '',
      };
      dispatch({ type: 'ADD_INPUT', payload: newInput });
    };
  
    const handleInputChange = (id, value) => {
      const updatedInputs = state.inputs.map(input =>
        input.id === id ? { ...input, value } : input
      );
      dispatch({ type: 'UPDATE_INPUT', payload: updatedInputs });
    };
  
    const handleUpdateInput = () => {
      dispatch({ type: 'UPDATE_NAME', payload: newName });
      setNewName(""); // Clearing the input field after update
    };
  
    const handleDeleteInput = id => {
      dispatch({ type: 'DELETE_INPUT', payload: id });
    };
  
    return (
      <div>
        <div>
          <span>Name: {state.name}</span><br />
          <span>email {state.email}</span><br />
          <span>ph: {state.ph_no}</span><br />
          <button onClick={() => setNewName(state.name)}>Edit</button>
          {newName && (
            <div>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleUpdateInput}>Update</button>
            </div>
          )}
          {newEmail && (
            <div>
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button onClick={handleUpdateInput}>Update</button>
            </div>
          )}
        </div>
        <button onClick={handleAddInput}>Add Input</button>
        {state.inputs.map(input => (
          <div key={input.id}>
            <input
              type="text"
              value={input.value}
              onChange={e => handleInputChange(input.id, e.target.value)}
            />
            <button onClick={() => handleDeleteInput(input.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }

export default UserComponent