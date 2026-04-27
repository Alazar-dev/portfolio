import experience from '../data/experience.json';

export default function Experience() {
  return (
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
                <div key={i} className="flex md:contents">

                  {/* LEFT SIDE */}
                  {isLeft && (
                      <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                        <h3 className="font-semibold text-lg mb-3">{item.company}</h3>

                        {item.points.map((point, idx) => (
                            <div key={idx} className="flex">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                              <p className="text-gray-500">{point}</p>
                            </div>
                        ))}
                      </div>
                  )}

                  {/* CENTER LINE */}
                  <div className="col-start-5 col-end-6 mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800" />
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-800" />
                  </div>

                  {/* RIGHT SIDE */}
                  {!isLeft && (
                      <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                        <h3 className="font-semibold text-lg mb-3">{item.company}</h3>

                        {item.points.map((point, idx) => (
                            <div key={idx} className="flex">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                              <p className="text-gray-500">{point}</p>
                            </div>
                        ))}
                      </div>
                  )}

                </div>
            );
          })}
        </div>
      </div>
  );
}