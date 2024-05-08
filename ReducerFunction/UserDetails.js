import React from 'react'
import { useReducer,useState } from 'react'

const initialState = {
  name:"Jerome",
  email:"jerome@gmail",
  ph: "96545678",
  inputs:[],
}



function UserDetails() {
  const [state, dispatch] = useReducer('');
const [newName, setNewName] = useState("");
const [newEmail, setNewEmail] = useState("");
const [newPh, setNewPh] = useState("");

const handleUpdateInput = () => {
}


  return (
    <div>
        <div>
        <span>Name: {state.name}</span><br />
          <span>email {state.email}</span><br />
          <span>ph: {state.ph}</span><br />
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
        </div>
    </div>
  )
}

export default UserDetails