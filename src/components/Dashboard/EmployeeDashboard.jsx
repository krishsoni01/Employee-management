import Header from "../../others/Header.jsx"
import TaskListNumbers from "../../others/TaskListNumbers.jsx"
import TaskList from "../TaskList/TaskList.jsx"

const EmployeeDashboard = (props) => {
  return (
    <>
    <Header changeUser={props.changeUser} data={props.data} />  
    <TaskListNumbers data={props.data} />
    <TaskList data={props.data} />
    </>
  )
}

export default EmployeeDashboard