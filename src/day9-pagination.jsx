// import React, { useState, useEffect } from 'react';

// function PaginatedUsers() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 3;

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   // Pagination logic
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
//   const totalPages = Math.ceil(users.length / usersPerPage);

//   const handlePageChange = (pageNum) => {
//     setCurrentPage(pageNum);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>📚 Paginated Users</h2>

//       <ul>
//         {currentUsers.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>

//       {/* Pagination Controls */}
//       <div style={styles.pagination}>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//           <button
//             key={num}
//             onClick={() => handlePageChange(num)}
//             style={{
//               ...styles.button,
//               backgroundColor: num === currentPage ? '#007bff' : '#f0f0f0',
//               color: num === currentPage ? '#fff' : '#000',
//             }}
//           >
//             {num}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '500px',
//     margin: '50px auto',
//     fontFamily: 'Arial',
//   },
//   pagination: {
//     marginTop: '20px',
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: '8px 12px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default PaginatedUsers;


import React, { useState, useEffect } from 'react';

function PaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const usersPerPage = 3;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get current page users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNum) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNum);
      setLoading(false);
    }, 500); // simulate delay
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📚 Paginated Users</h2>

      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <ul>
          {currentUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}

      <div style={styles.pagination}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1 || loading}
          style={{
            ...styles.button,
            opacity: currentPage === 1 || loading ? 0.5 : 1,
          }}
        >
          ◀ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            disabled={loading}
            style={{
              ...styles.button,
              backgroundColor: num === currentPage ? '#007bff' : '#f0f0f0',
              color: num === currentPage ? '#fff' : '#000',
            }}
          >
            {num}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || loading}
          style={{
            ...styles.button,
            opacity: currentPage === totalPages || loading ? 0.5 : 1,
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    fontFamily: 'Arial',
  },
  pagination: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    minWidth: '50px',
  },
};

export default PaginatedUsers;
