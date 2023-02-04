import { fetchUsers } from "./apicall";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {

  let dispacth=useDispatch()
  let{users,isPending,isError,errorMessage}=useSelector(state=>state.users)
  useEffect(()=>{
 let actionObj=fetchUsers("https://jsonplaceholder.typicode.com/users")
 dispacth(actionObj)
  },[])
  return (
    <div></div>
  );
}

export default App;
