import React from "react";

function App() {
  const username = "Jai";

  return (
    <div>
      <h1>App Component</h1>
      <Header username={username} />
    </div>
  );
}

function Header({ username }) {
  return (
    <div>
      <h2>Header Component</h2>
      <Icon username={username} />
    </div>
  );
}

function Icon({ username }) {
  return (
    <div>
      <h3>Icon Component</h3>
      <UserProfile username={username} />
    </div>
  );
}

function UserProfile({ username }) {
  return (
    <div>
      <h4>User Profile</h4>
      <p>Welcome, {username}</p>
    </div>
  );
}

export default App;