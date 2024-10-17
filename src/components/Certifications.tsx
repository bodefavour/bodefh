import React from 'react';

const certificationsData = [
  {
    title: 'Meta Social Media Marketing Professional Certificate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/MetaSMM.png'), // Placeholder for the certificate image
  },
  {
    title: 'Meta Certified Digital Marketing Associate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: '../assets/images/MetaCDM.png', // Placeholder for the certificate image
  },
{
    title: 'Meta Certified Digital Marketing Associate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: '../assets/images/MetaCDM.png', // Placeholder for the certificate image
  },
{
    title: 'Meta Certified Digital Marketing Associate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: '../assets/images/MetaCDM.png', // Placeholder for the certificate image
  },
{
    title: 'Meta Certified Digital Marketing Associate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: '../assets/images/MetaCDM.png', // Placeholder for the certificate image
  },
  // Add more certificates similarly
];

const Certifications = () => {
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
    textAlign: 'center',
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

  const imageStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '0',
    marginBottom: '15px',
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),; /* Optional: Adds shadow for better visuals */
  };

  return (
    <section id="certifications" style={sectionStyle}>
      <h2 style={titleStyle}>Certifications</h2>
      <div style={gridStyle}>
        {certificationsData.map((cert, index) => (
          <div key={index} style={cardStyle}>
            <img src={cert.image} alt={`${cert.title} Image`} style={imageStyle} />
            <h3 style={cardTitleStyle}>{cert.title}</h3>
            <p>Issued by: {cert.issuedBy}</p>
            <p>Date: {cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
            <p style={descriptionStyle}>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
