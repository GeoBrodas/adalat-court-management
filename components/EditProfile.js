function EditProfile() {
  return (
    <section className="w-full bg-white">
      <form action="" method="post">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">Edit Profile</h4>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Second Name"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Change Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Address
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="relative">
                    <label For="" className="font-medium text-gray-900">
                      Mobile
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Mobile number"
                    />
                  </div>

                  <div className="relative">
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Save Changes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
export default EditProfile;
