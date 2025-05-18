// import React from 'react';
// import LoginForm from './day4-usestate-form';
// import UserList from './day5-useeffect-fetch';
// import SearchUser from './day6-search-filter';
// import FilterAndSortUsers from './day7-filter-sort';
// import ConditionalUserList from './day8-loading-conditional';
// import PaginatedUsers from './day9-pagination';


// function App() {
//   return (
//     <div>
//       <LoginForm />
//       <UserList />
//       <SearchUser />
//       <FilterAndSortUsers/>
//      <ConditionalUserList />;
//      <PaginatedUsers />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginForm from './day4-usestate-form';
import UserList from './day5-useeffect-fetch';
import SearchUser from './day6-search-filter';
import FilterAndSortUsers from './day7-filter-sort';
import ConditionalUserList from './day8-loading-conditional';
import PaginatedUsers from './day9-pagination';
import Home from './pagesDay10/Home';
import About from './pagesDay10/About';
import Contact from './pagesDay10/Contact';
import ThemeToggle from './Day11ThemeToggle';
import Day12CustomHook from './day12-custom-hook'

function App() {
  return (
    <BrowserRouter>
     <div>
      <nav style = {styles.nav}>
        <Link style = {styles.link} to ="/day4">Day 4</Link>
        <Link style = {styles.link} to ="/day5">Day 5</Link>
        <Link style = {styles.link} to ="/day6">Day 6</Link>
        <Link style = {styles.link} to ="/day7">Day 7</Link>
        <Link style = {styles.link} to ="/day8">Day 8</Link>
        <Link style = {styles.link} to ="/day9">Day 9</Link>
        <Link style = {styles.link} to="/">Home</Link>
        <Link style = {styles.link} to="/about">About</Link>
        <Link style = {styles.link} to="/contact">Contact</Link>
        <Link style = {styles.link} to="/day11">Day 11</Link>
        <Link style = {styles.link} to="/day12">Day 12</Link>
      </nav>

      <div style={styles.content}>
      <Routes>
        <Route path="/" element={<h2>Welcome to My React Practice App</h2>} />
        <Route path="/day4" element={<LoginForm />} />
        <Route path="/day5" element={<UserList />} />
        <Route path="/day6" element={<SearchUser />} />
        <Route path="/day7" element={<FilterAndSortUsers />} />
        <Route path="/day8" element={<ConditionalUserList />} />
        <Route path="/day9" element={<PaginatedUsers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/day11" element={<ThemeToggle />} />
        <Route path="/day12" element={<Day12CustomHook />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '160px',
    backgroundColor: '#f0f0f0',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
    marginLeft: '180px', // Leave space for sidebar
    padding: '20px',
  }
};

export default App;

