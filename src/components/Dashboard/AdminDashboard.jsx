import AllTasks from "../../others/AllTasks"
import CreateTask from "../../others/CreateTask"
import Header from "../../others/Header"

const AdminDashboard = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask data={props.data}/>
      <AllTasks data={props.data}/>
    </>
  )
}

export default AdminDashboard