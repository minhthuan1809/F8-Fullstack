import "animate.css";

function Skills() {
  const Oject = [
    {
      img: <i className="fa-solid fa-user-secret text-lg"></i>,
      title: "Frontend Web Development:",
      content:
        "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
    {
      img: <i className="fa-solid fa-fire-extinguisher text-lg"></i>,
      title: "Mobile App Development",
      content:
        "I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
    },
    {
      img: <i className="fa-solid fa-laptop-code text-lg"></i>,
      title: "Technology Stack",
      content:
        "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
    },
    {
      img: <i className="fa-solid fa-user text-lg"></i>,
      title: "Web Optimization",
      content:
        "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
    },
    {
      img: <i className="fa-solid fa-user text-lg"></i>,
      title: "User-Centric Design",
      content:
        "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey..",
    },
    {
      img: <i className="fa-solid fa-user text-lg"></i>,
      title: "Testing and Quality Assurance",
      content:
        "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
    },
  ];

  return (
    <>
      <section className="skills">
        <div className="text-center mt-[8rem] mb-[5rem] w-[70%] m-auto">
          <p className="block antialiased  font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
            my skills
          </p>
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
            What I do
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto  !text-gray-500 lg:w-10/12">
            I'm not just a developer; I'm a digital dreamweaver. Crafting
            immersive online experiences is not just a job but my calling.
            Discover below how I can help you.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {Oject.map(({ img, title, content }, index) => (
            <div key={index} className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center justify-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                {img}
              </div>
              <h2 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                {title}
              </h2>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
