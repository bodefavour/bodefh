import React from 'react';

const certificationsData = [
  {
    title: 'BSc. Software Engineer',
    issuedBy: 'Holberton School/ALX',
    date: 'January 2025',
    link: 'https://drive.google.com/file/d/1gldtH7eqE2IrgSCwFS1ZGq4tJwINQBgw/view?usp=drivesdk',
    description: 'Credential ID: ALX_SE',
    image: require('../assets/images/ALX_SE.png'),
  },
  {
    title: 'Meta Social Media Marketing Professional Certificate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/MetaSMM.png'),
  },
  {
    title: 'Meta Certified Digital Marketing Associate',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require ('../assets/images/MetaCDM.png'),
  },
{
    title: 'Measure and Optimize Social Media Marketing Campaigns',
    issuedBy: 'Meta',
    date: 'August 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/MOSMMC.png'),
  },
{
    title: 'Fundamentals Of Social Media Marketing',
    issuedBy: 'Meta',
    date: 'July 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/FOSMM.png'),
  },
{
    title: 'Advanced Social Media Strategy Training and Certification',
    issuedBy: 'Meta',
    date: 'June 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/MetaSMM.png'),
  },
{
    title: 'Introduction To Social Media Marketing ',
    issuedBy: 'Meta',
    date: 'June 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/IOSMM.png'),
  },
{
    title: 'Advertising With Meta',
    issuedBy: 'Meta',
    date: 'June 2024',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Placeholder description here.',
    image: require('../assets/images/AWM.png'),
  },
{
    title: 'Postman API Fundamentals Students Expert',
    issuedBy: 'Postman',
    date: 'August 2024',
    link: 'https://api.badgr.io/public/assertions/IWV3XB4_R3m6-zd5f26EOQ?identity__email=bodefavour%40gmail.com',
    description: 'Placeholder description here.',
    image: require('../assets/images/Postman - Postman API Fundamentals Student Expert - 2024-05-04.png'),
  },
{
    title: 'Binance Utiva Certified Cloud Developer',
    issuedBy: 'Meta',
    date: 'November 2023',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Credential ID: BC/UT/121',
    image: require('../assets/images/image_bdd8dd24-3e16-4b97-84c9-80443f2b1bdf20241017_112618.png'),
  },
{
    title: 'Hashgraph Blockchain Developer',
    issuedBy: 'Hashgraph',
    date: 'November 2024',
    link: 'https://certs.hashgraphdev.com/97d840b8-108a-499d-a1e5-ae11b06e8fac.pdf',
    description: 'Credential ID: 97d840b8-108a-499d-a1e5-ae11b06e8fac',
    image: require('../assets/images/Hashgraph.png'),
  },
{
    title: 'Binance Utiva Certified Cloud Developer',
    issuedBy: 'Meta',
    date: 'November 2023',
    link: 'https://www.credly.com/badges/6c657f72-5fce-4fb5-b741-61b7a75902bc/linked_in_profile',
    description: 'Credential ID: BC/UT/121',
    image: require('../assets/images/image_bdd8dd24-3e16-4b97-84c9-80443f2b1bdf20241017_112618.png'),
  },
  // Add more certificates similarly
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center">
<div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <div className="w-full h-48 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-64 h-48 object-contain"  // Use object-contain to keep the image within boundaries //
    style={{ maxWidth: '100%', maxHeight: '100%' }}  //Ensure the image doesn't overflow//
              />
            </div>
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-600">Issued By: {cert.issuedBy}</p>
            <p className="text-gray-500">Issued: {cert.date}</p>
            <p className="text-gray-700 mb-4">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default Certifications;
