import { useContext } from "react"
import { UserContext } from "../Usercontext"
import { Navigate } from "react-router-dom"

export default function Profile (){
  const {user, setUser} = useContext(UserContext)
  function Logout(){
    setUser(null)
    setRedirect(true)
  }

  if(user === null){
    return <Navigate to={'/'} />
  }


    return(
        <form>
        <div className="flex flex-col justify-center items-center p-5">
        <h2 className=" text-3xl font-semibold my-10 border-b-2 ">Edit profile</h2>
        <p className=" text-sm mb-2 text-gray-400">Change profile picture</p>
            <img className=" w-56 border rounded-3xl shadow-lg" src={"http://localhost:5000/" + user.pfp} />
         <p className=" text-sm  text-gray-400">Change user name</p>
            <input
            className=" border border-gray-500 rounded-3xl"
             value={user.name} 
            type="text"
            />
         <p className=" text-sm  text-gray-400">Change email address </p>
            <input
            className=" border border-gray-500 rounded-3xl"
             value={user.email} 
            type="text"
            />

            <button className=" w-fit mt-3 p-2 rounded-xl shadow-sm bg-green-400 text-white">Save Changes</button>
            <button className="primary mt-10 font-semibold shadow-md" onClick={Logout}>logout</button>
        </div>
        </form>
    )
}