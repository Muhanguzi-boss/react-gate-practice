import React, { useState, createContext, useContext } from "react";

const authContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const login = () => setUser({ name: "BOSS", role: "admin" });
  const logout = () => setUser(null);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      <Navbar />
      <Main />
    </authContext.Provider>
  );
}

export default App;

function Navbar() {
  const { user, login, logout } = useContext(authContext);
  return (
    <div>
      {user ? (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

function Main() {
  const { user } = useContext(authContext);
  return <p>{user ? "You are logged in" : "Please log in!"}</p>;
}
