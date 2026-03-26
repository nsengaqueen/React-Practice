import React, { useEffect, useState } from "react"

type User = {
  id: number;
  email: string;
  name: string;
}

function ListUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>(""); // new state for search

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error('failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('something went wrong')
        }
      } finally {
        setLoading(false)
      }
    };
    fetchUsers();
  }, [])

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* counter section */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* search bar */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
      />

      {/* users list filtered by search */}
      {users
        .filter(user => 
          user.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ListUsers;
