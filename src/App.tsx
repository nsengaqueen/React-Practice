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
   const [count, setCount] = useState<number>(0);

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

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default ListUsers;