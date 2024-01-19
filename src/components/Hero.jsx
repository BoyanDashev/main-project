import '../index.css'

const Hero = () => {
  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' }} className="container pl-10 pr-10">
      <h1 style={{ fontFamily: 'Roboto Mono, monospace' }}
        className="text-white text-4xl sm:text-2xl
         md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
         flex items-center justify-center  pt-[8rem]"
      >
        {" "}
        Hi my name is Boyan, 
      </h1>
      <p className="text-white font-bold text-4xl ml-10 sm:text-2xl
         md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
          flex items-start  justify-start pt-10">I want to become the best developer I can possibly be.</p>
      <p className="text-white font-bold text-4xl ml-8 sm:text-2xl
         md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
         flex items-start justify-start pt-10">I love to learn new technologies, and these are some of my proficiencies:</p>
      
    </div>
  );
};
export default Hero;
