import React from 'react';
import Course from './Course';

function CourseList({ courses, onApprove, onReject }) {
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} onApprove={onApprove} onReject={onReject} />
      ))}
    </div>
  );
}

export default CourseList;
