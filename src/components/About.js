export default function About({ technologies, profile_pic }) {
  return (
    <div className="flex flex-col my-10">
      <h1 className="text-white text-2xl font-bold pb-4 text-center">
        About Me
      </h1>
      <div className="md:flex">
        <div className="pp_container">
          <img src={profile_pic} alt="profile" />
        </div>
        <div className="ml-10">
          <p className="text-gray-500">
            I'm an enthusiast Software Engineer having a great passion for
            developing engineering solutions.
          </p>

          <p className="text-gray-500 md:w-[60%]">
            An aspiring and driven Software Engineer with robust problem-solving
            skills and experience in developing software projects. I am looking
            forward to work with fast-growing company so that I can make an
            impact. I bring 2+ years of experience in Full Stack Development and
            3+ years of experience in programming.
          </p>
          <p className="text-white  py-4">
            Technologies I've been working with:
          </p>
          {technologies.map((technology) => (
            <div>
              <p className="text-gray-500">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
