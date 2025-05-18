import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Simple email pattern
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
  
      alert(`Email: ${email}\nPassword: ${password}`);
      // Optionally: Reset fields
      setEmail('');
      setPassword('');
    };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

return (
    <div style={styles.container}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <div style={styles.checkboxRow}>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ffff',
    borderRadius: '56px',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer'
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};

export default LoginForm;