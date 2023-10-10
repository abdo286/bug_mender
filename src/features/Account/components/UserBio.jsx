const UserBio = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 h-full">
      <div className="flex items-center">
        <img
          src="user-profile-image.jpg"
          alt="User Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500">Senior Web Developer</p>
          <p className="text-gray-500">8+ years of experience</p>
        </div>
      </div>
      <p className="mt-4">
        John Doe is a seasoned web developer with over 8 years of experience in
        creating web applications. He specializes in front-end development using
        technologies like React, JavaScript, and CSS. John has worked on a
        variety of projects, from e-commerce websites to complex web
        applications.
      </p>
      <div className="flex flex-col gap-3 mt-3">
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside ml-4">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML5/CSS3</li>
            <li>Responsive Web Design</li>
            <li>RESTful APIs</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Joined Company</h3>
          <p className="text-gray-500">July 2015</p>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
