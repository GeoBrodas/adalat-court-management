import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

function MeetTheDevelopersPage() {
  const saifUrl =
    'https://media-exp1.licdn.com/dms/image/C5603AQEwfThqCOxOzg/profile-displayphoto-shrink_100_100/0/1630575342297?e=1641427200&v=beta&t=jdSJRxSf4pMwQcLZRVeZ5iHhmqVqcFJ9PB-G78TKU_U';

  const geoUrl =
    'https://media-exp1.licdn.com/dms/image/C5603AQG-dy6nIY8CLg/profile-displayphoto-shrink_400_400/0/1635856807943?e=1641427200&v=beta&t=Ws4j2GN0ZpcJ_e-X2us7tLEevDCX_eu242LbhF2c9qA';

  const amishaUrl =
    'https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/s320x320/136993775_487356958917140_1809878205885646764_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=iF_O2SXeijgAX_G-2SP&edm=ABfd0MgBAAAA&ccb=7-4&oh=7e9dc9ec56223e01cbdc5c873be05e2d&oe=61A23229&_nc_sid=7bff83';

  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>Meet the minds behind!</title>
        <meta
          name="description"
          content="Meet the minds behind this open-source project!"
        />

        {/* Meta tags og */}
        <meta property="og:title" content="Meet the developers!" />
        <meta
          property="og:description"
          content="The minds behind Adaalat- A court management system to register court hearings."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1635871194/developers_u12bmd.png"
        />
        <meta
          property="og:url"
          content="https://adaalat.vercel.app/developers"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Twitter */}
        <meta name="twitter:title" content="Meet the developers!" />
        <meta
          name="twitter:description"
          content="The minds behind Adaalat- A court management system to register court hearings."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1635871194/developers_u12bmd.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            {/* Image */}
            <Image
              src={geoUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Georgey V B
            </h2>
            <p className="leading-relaxed text-base">
              Full-Stack and JamStack developer.
            </p>
            <Link href="https://www.linkedin.com/in/georgeyvb/">
              <a
                target="_blank"
                className="mt-3 text-pink-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Amisha Naik
            </h2>
            <p className="leading-relaxed text-base">
              An aspiring software developer. Currently pursuing bachelor degree
              in Computer engineering.
            </p>
            <Link href="https://www.linkedin.com/in/amisha-naik-b2a633191">
              <a
                target="_blank"
                className="mt-3 text-pink-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            <Image
              src={amishaUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            <Image
              src={saifUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Saif Farooqui
            </h2>
            <p className="leading-relaxed text-base">
              Computer Science student and aspiring software developer.
            </p>
            <Link href="https://www.linkedin.com/in/saif-farooqui">
              <a
                target="_blank"
                className="mt-3 text-pink-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheDevelopersPage;
