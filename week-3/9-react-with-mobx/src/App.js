import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import { useLocalStore, useObserver } from 'mobx-react'


const StoreContext = React.createContext()

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    tasks: ["eat", "sleep"],
    addTask: task => {
      store.tasks.push(task)
    },
    get taskCount() {
      return store.tasks.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
  
}


const TaskList = () => {
  const store = React.useContext(StoreContext)
  return useObserver(() => {
    return (
      <ul>
        {
          store.tasks.map(task => {
            return (<li className="list-group-item" key={task}>{task}</li>)
          })
        }
      </ul>
    )
  })

}


const TaskForm = () => {
  const [task, setTask] = useState("")
  const store = React.useContext(StoreContext)
  return (
    <div className="card card-body">
      <form onSubmit={e => {
        e.preventDefault();
        store.addTask(task)
        setTask("")
      }}>
        <input placeholder="Enter New Task"
          value={task}
          onChange={e => {
            setTask(e.target.value)
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}


const TaskHeader = () => {
  const store = React.useContext(StoreContext)
  return useObserver(() => (<span className="badge badge-dark">{store.taskCount}</span>))
}


function App() {
  return (
    <div className="container">
      <hr />
      <h1>react + mobx</h1>
      <hr />
      <StoreProvider>
        <TaskHeader />
        <hr />
        <TaskList />
        <hr />
        <TaskForm />
        <hr />
      </StoreProvider>
    </div>
  )
}

export default App;
