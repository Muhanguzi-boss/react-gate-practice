import React, { createContext, useContext } from "react";
const userContext = createContext();
const user = { name: "Boss", role: "Student" };

function App() {
  return (
    <userContext.Provider value={user}>
      <Dashboard />
    </userContext.Provider>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile />
    </div>
  );
}

function Profile() {
  const user = useContext(userContext);
  return (
    <p>
      Hello {user.name}, your role is {user.role}
    </p>
  );
}
