import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// class Text extends React.Component {
//     render() {
//       return (
//         <h1>Hello World</h1>
//       );
//     }
//   }
  
// class Item extends React.Component{
//     render(){
//         return(
//             <li>Task Name</li>
//         )
//     }
// }

const Item = ({taskName})=>{
    return (
        <li>{taskName}</li>
    )
}

// class Todo extends React.Component{
//     render(n){
//             for(let i=0; i<n; i++){
//                 <Item />
//             }
//     }
// }

const Todo = ()=>{
    const [tasks, setTasks] = useState([]);
    const addNewTask = ()=>{
        const desc = document.getElementById('task-desc').value;
        if(desc!==""){
            setTasks([...tasks,desc]);
        }
        document.getElementById('task-desc').value="";
    }
    return(
        <>
        <form align="center"> 
            <label><b>Task Description:</b> 
            <input type="text" id="task-desc"/>
            </label>
        <input type="submit" onClick={addNewTask} value="Add" />
        </form>
        {
            tasks.map((val, key)=><Item taskName={val} key={key}/>)
        }
        </>
    )
       
}


// ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Todo />);
  