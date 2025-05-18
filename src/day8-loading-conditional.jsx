import React, { useState, useEffect } from 'react';

function ConditionalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2>📦 Users List (With Loading State)</h2>

      {/* Loading state */}
      {loading && <p>⏳ Loading users...</p>}

      {/* Error state */}
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}

      {/* Empty state */}
      {!loading && users.length === 0 && <p>No users found.</p>}

      {/* Data state */}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    fontFamily: 'Arial',
  },
};

export default ConditionalUserList;
