import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = () => {
    // reset messages every time they click submit
    setError(null);
    setSuccess(false);

    // check if fields are empty
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // check if email is valid
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // check if password is long enough
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // if everything passes
    setSuccess(true);
  };

  return (
    <div>
      <h1>Login</h1>

      {/* email input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {/* password input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      {/* submit button */}
      <button onClick={handleSubmit}>Login</button>

      {/* show error if there is one */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* show success if login is valid */}
      {success && <p style={{ color: "green" }}>Login successful!</p>}
    </div>
  );
}

export default LoginForm;
