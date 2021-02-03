import React, {useRef, useState} from 'react';
import Counter from './Counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';

import './App.css';

function App() {
  const name = "hello";
  const style = {
    backgroundColor: 'black'
  }

  const [inputs, setInputs] = useState({
    username: '',
    email:''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
      {
          id: 1,
          username: 'velopert',
          email: "ww57403@naver.com",
      },
      {
          id: 2,
          username: 'velopert1',
          email: "ww57404@naver.com",
      },
      {
          id: 3,
          username: 'veloper2',
          email: "ww57405@naver.com",
      }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users,user])
    //setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email:''
    })

    nextId.current += 1;
  };

  return (
    <div className="App">
        <div style={style}>{name}</div>
      {/* <InputSample/> */}
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users}/>
     {/* <Counter/> */}
    </div>
  );
}

export default App;
