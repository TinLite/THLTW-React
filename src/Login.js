import { useState } from "react";

function Login() {
  const [loginCredential, setLoginCredential] = useState({
    username: "",
    password: "",
    admin: false,
  });
  return (
    <div className="login-form">
      <label>
        Enter your username:
        <input
          type="text"
          value={loginCredential.username}
          onInput={(e) =>
            setLoginCredential({ ...loginCredential, username: e.currentTarget.value })
          }
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          value={loginCredential.password}
          onInput={(e) =>
            setLoginCredential({ ...loginCredential, password: e.currentTarget.value })
          }
        />
      </label>
      <label>
        <input
          type="checkbox"
          value={loginCredential.admin}
          onChange={(e) => setLoginCredential({ ...loginCredential, admin: e.currentTarget.checked })}
        /> is admin
      </label>
      <button
        onClick={() => console.log(loginCredential)}
      >Submit</button>
    </div>
  )
}

export {
  Login
}