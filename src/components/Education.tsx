import React from 'react';

const educationData = [
  {
    institution: 'Osun State University, UNIOSUN, Osogbo Osun State',
    degree: 'B.NSc. in Nursing Science',
    startDate: 'November 2022',
    endDate: 'Present',
    keyCourses: ['Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology'],
    description: 'Placeholder description for Nursing Science at UNIOSUN.',
  },
  {
    institution: 'Holberton School / ALX',
    degree: 'Software Engineering',
    startDate: 'July 2023',
    endDate: 'December 2024',
    keyCourses: ['C Programming', 'Data Structures', 'Algorithms', 'Back-End Development'],
    description: 'Placeholder description for ALX Software Engineering Program.',
  },
  // Add more educational experiences similarly
];

const Education = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '10px',
  };

  const descriptionStyle: React.CSSProperties = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#666',
  };

  return (
    <section id="education" style={sectionStyle}>
      <h2 style={titleStyle}>Education</h2>
      <div style={gridStyle}>
        {educationData.map((edu, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={cardTitleStyle}>{edu.institution}</h3>
            <p>Degree: {edu.degree}</p>
            <p>
              Duration: {edu.startDate} - {edu.endDate}
            </p>
            <p>Key Courses: {edu.keyCourses.join(', ')}</p>
            <p style={descriptionStyle}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
