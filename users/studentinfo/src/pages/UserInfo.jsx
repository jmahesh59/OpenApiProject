import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function UserInfo() {
   const {userId}= useParams();
   const [data ,setData] = useState(null);
   useEffect(()=>{
    async function fetchUser(){
      try {
         const res = await fetch(`http://localhost:8080/api/v1/public/randomusers/${userId}`)
         if(!res.ok){
           return
         }
         const data = await res.json();
         setData(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
   },[userId])

   console.log(data)
  return (
    <div>
      {
        data && (
          <div className="flex justify-center items-center w-full mt-[100px] gap-8 ">
            <div>
              <img src={data.picture.large} alt="" className="w-[200px] rounded-lg bg-slate-200 " />
            </div>
            <div className=""
            >
              <p><span>Name :</span> {data.name.title} {data.name.first} {data.name.last} </p>
              <p><span>Location :</span> {`${data.location.city},${data.location.country} , ${data.location.postcode} `} </p>
              <p><span>Phone :</span> {data.phone}</p>
              <p><span>Age:</span> {data.dob.age}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserInfo
