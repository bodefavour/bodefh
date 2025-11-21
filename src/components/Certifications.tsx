import React from 'react';
import { motion } from 'framer-motion';

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
  // Your existing certifications data array
  // ...
];

const Certifications: React.FC = () => {
  // Group certifications by issuer for better organization
  const groupedCertifications = certificationsData.reduce((acc, cert) => {
    if (!acc[cert.issuedBy]) {
      acc[cert.issuedBy] = [];
    }
    acc[cert.issuedBy].push(cert);
    return acc;
  }, {} as Record<string, typeof certificationsData>);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden" id="certifications">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Validated expertise across software engineering, cloud development, and digital marketing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Certification Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {Object.keys(groupedCertifications).map((issuer) => (
            <button
              key={issuer}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-600/20 hover:border-blue-400/30 transition-all"
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Certification Header */}
              <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-gray-700/50">
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-blue-300 text-sm mt-1">{cert.issuedBy}</p>
              </div>
              
              {/* Certification Body */}
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-full h-48 bg-gray-900/50 rounded-lg flex items-center justify-center p-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>Issued: {cert.date}</span>
                  {cert.description && (
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">
                      {cert.description}
                    </span>
                  )}
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all"
                >
                  Verify Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {certificationsData.length}+
            </div>
            <div className="text-gray-400 mt-2">Certifications</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {Object.keys(groupedCertifications).length}
            </div>
            <div className="text-gray-400 mt-2">Accredited Institutions</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              2+
            </div>
            <div className="text-gray-400 mt-2">Technical Domains</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              2+
            </div>
            <div className="text-gray-400 mt-2">Marketing Domains</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;