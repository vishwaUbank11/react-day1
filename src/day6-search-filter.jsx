import React, { useState, useEffect } from 'react';

function SearchUser() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // fetch user list
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  // filter users on search change
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(result);
  }, [search, users]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>🔍 Search Users</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <ul style={styles.list}>
          {filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    width: '1283px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f4f4',
  },
  card: {
    padding: '30px',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
};

export default SearchUser;
