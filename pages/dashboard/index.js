import Feed from '@/components/Feed';
import FeedHeader from '@/components/FeedHeader';
import { getSession, signOut, useSession } from 'next-auth/client';

function Dashboard(props) {
  const { session } = props;
  // console.log(session);

  return (
    <div>
      Dashbard: {props.session.user.name || props.session.user.email}
      <button className="bg-gray-100 rounded-sm p-2 ml-4" onClick={signOut}>
        SignOut
      </button>
      {/* Section for add clients */}
      <FeedHeader />
      {/* Table of clients */}
      <Feed />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Dashboard;
