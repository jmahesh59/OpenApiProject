import { Link } from "react-router-dom"

function UserCard({user}) {
  
  return (
    <div className="flex flex-col items-center border p-2 w-[270px] bg-slate-200 text-black rounded-lg ">
       <div className="w-full">
          <img src={user.picture.large} alt="picture" className="w-full bg-contain" />
       </div>
       <div>
        <h2><span>Name :</span> {user.name.title} {user.name.first} {user.name.last}</h2>
        <p><span>gender :</span> {user.gender}</p>
        <p><span>Nationality :</span> {user.nat}</p>
        
        <Link to={`/user-info/${user.id}`}><button>ShowMore</button></Link>
       </div>
    </div>
  )
}

export default UserCard
