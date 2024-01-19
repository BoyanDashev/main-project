import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Profiles = () => {
  const githubProfile = 'https://github.com/boyandashev'; // Replace with your GitHub profile URL
  const linkedinProfile = 'https://www.linkedin.com/in/boyan-dashev-aa1a69299/'; // Replace with your LinkedIn profile URL

  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' }} className='flex text-2xl sm:text-2xl
         md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl flex-col text-white items-center justify-center  mb-12'>
      
      <div>
        <strong>GitHub:</strong>{' '}
        <a href={githubProfile} style={{ textDecoration: 'underline', color: 'white' }}  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='w-10 h-10' /> Check out my GitHub
        </a>
      </div>
      <div  className='mt-10 ' >
        <strong>LinkedIn:</strong>{' '}
        <a href={linkedinProfile} style={{ textDecoration: 'underline', color: 'white' }}  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='w-10 h-10'/> Connect on LinkedIn.
        </a>
      </div>
    </div>
  );
};

export default Profiles;