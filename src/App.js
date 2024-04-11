// src/App.js

import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CourseList from './CourseList';

function App() {
  const courses = [
    { id: 1, code:'20CS3CSJP', name: 'Introduction to Java Programming', students: [{ id: 1, name: 'Prathvi Puthran', usn: '1BM20CS112' }, { id: 2, name: 'Siri Prahlad', usn: '1BM20CS160'  }] },
    { id: 2, code:'20CS3CSDS', name: 'Data Science', students: [{ id: 3, name: 'Spoorthi Udupa', usn: '1BM20CS161' }] },
    // Add more courses as needed
  ];

  const handleApprove = (courseId) => {
    console.log('Approved Course ID:', courseId);
    // Here, you'd typically make an API call to mark the course as approved
  };

  const handleReject = (courseId) => {
    console.log('Rejected Course ID:', courseId);
    // Similar to approve, you'd make an API call to mark the course as rejected
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CourseList courses={courses} onApprove={handleApprove} onReject={handleReject} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
