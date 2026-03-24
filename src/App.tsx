import React, { useEffect, useState } from "react"
type User={
  id: number;
  email: string;
  name: string;
}
function ListUsers(){
  const[users,setUsers]=useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(()=>{
    const fetchUsers= async ()=>{
try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
     console.log("Status:", response.status);
  if(!response.ok){
    throw new Error('failed to fetch users');
  }
  const data = await response.json();
  console.log(data);
  setUsers(data);
}  
catch(err){
  if(err instanceof Error){
    setError(err.message);
  }
  else{
    setError('something went wrong')
  }
}  
finally{
  setLoading(false)
}  
    };
    fetchUsers();
  },[])
  if(loading) return <p>Loading</p>;
  if(error)return <p>{error}</p>;

  return(
    <div>
      {
        users.map((user)=>(
          <div key={user.id}>
           <h3>{user.name}</h3>
           <p>{user.name}</p>
          </div>
 
        ))
      
      }
    </div>
  );
}
export default ListUsers;