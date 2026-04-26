import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function AddUserForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (name === "" || email === "") {
      setError("Please fill in all fields")
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return;
    }

    const newUser = {
      id: Math.random(),
      name: name,
      email: email,
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <button onClick={handleSubmit}>Add User</button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}



export default AddUserForm;



