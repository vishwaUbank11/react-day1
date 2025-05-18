import React, { useState, useEffect } from 'react';

function FilterAndSortUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  useEffect(() => {
    let result = users;

    if (search) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCity) {
      result = result.filter((user) => user.address.city === selectedCity);
    }

    result = result.sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFilteredUsers(result);
  }, [search, selectedCity, sortAsc, users]);

  const uniqueCities = [...new Set(users.map((user) => user.address.city))];

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>📌 Filter & Sort Users</h2>

        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={styles.select}
        >
          <option value="">-- Filter by city --</option>
          {uniqueCities.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={() => setSortAsc(!sortAsc)} style={styles.button}>
          Sort: {sortAsc ? 'A → Z' : 'Z → A'}
        </button>

        <ul style={styles.list}>
          {filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.address.city}
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
  },
  card: {
    padding: '30px',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
    maxHeight: '85vh',
    overflowY: 'auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
};

export default FilterAndSortUsers;
