import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

function Home() {
  const [data, setData] = useState(null);
  const [page,setPage]=useState(1)
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch( `http://localhost:8080/api/v1/public/randomusers?page=${page}&limit=10`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const responseData = await res.json();
        console.log(responseData.data)
        setData(responseData.data.data);
        if(responseData.data.page<responseData.data.totalPages){
        setPage(responseData.data.page+1)
        }
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    }

    fetchUser();
  }, []);

  const fetchnextPage =async()=>{
    try {
      const res = await fetch( `http://localhost:8080/api/v1/public/randomusers?page=${page}&limit=10`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const responseData = await res.json();
      console.log(responseData.data)
      setData((prevData) => [...prevData, ...responseData.data.data]);
      if(responseData.data.page<responseData.data.totalPages){
      setPage(responseData.data.page+1)
      }
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }
  console.log(data)
  console.log(page)
  return (
    <div>
    <div className='flex max-w-6xl mx-auto flex-wrap items-center justify-center mt-20 gap-4'>
      {
        data && data.map((user)=>(
          <UserCard key={user.id} user={user}/>
        ))
      }
    </div>
    <div className="w-full flex mt-5 p-3">
     <button className='text-white-500 text-center mx-auto w-48 rounded-lg   p-3 border font-bold bg-amber-500' onClick={fetchnextPage}>showMore</button>
     </div>
       </div>

  );
}

export default Home;

