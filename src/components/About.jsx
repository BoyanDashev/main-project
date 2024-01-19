const About = () => {
  return (
    <section style={{ fontFamily: 'Roboto Mono, monospace' }} className="container pl-10 pr-10">
      <h2
        className=" text-white font-bold text-4xl sm:text-2xl
         md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl flex items-center justify-center  mb-4"
      >
        About me.
      </h2>
      <p
        className="text-white font-bold text-2xl sm:text-2xl
         md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
      >
         &nbsp; I Started Programming in spring 2022, with the course CS50x from
        Harvard.</p> <p className="mt-4 text-white font-bold text-2xl sm:text-2xl
         md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl"> &nbsp; I continued with variety of different courses from
        Freecodecamp, Youtube and Telerik Academy. Then I started creating my
        own projects and learning from the original documentations from
        different technologies like React, Tailwind.css, Three.js, SASS etc.
      </p>
      <p
        className="text-white font-bold text-2xl sm:text-2xl
         md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl mt-8 flex justify-center items-center"
      >
        Other proficiencies:
      </p>
      <ul
        className="text-white font-bold text-2xl sm:text-2xl
         md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl mt-5 flex-col flex justify-center items-start"
      >
        <li className="mb-4">English: C1.</li>
        <li className="mb-4">German: level B1.</li>
        <li className="mb-4">Bulgarian: Mother language.</li>
        <li className="mb-4">Thriving in team environments.</li>
        <li className="mb-4">Time managment.</li>
        <li className="mb-4">Problem-solving.</li>
      </ul>
    </section>
  );
};
export default About;
