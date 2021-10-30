import AddCase from '@/components/AddCase';
import { connectToDatabase, getAllLawyerProfiles } from '@/helpers/db-utils';
import { getSession } from 'next-auth/client';

function AddCases(props) {
  const { lawyerNames } = props;
  const parsedData = JSON.parse(lawyerNames);
  return <AddCase names={parsedData} />;
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

  const client = await connectToDatabase();
  const data = await getAllLawyerProfiles(client);

  const lawyerNames = data.map((item) => ({
    name: item.name,
  }));

  const stringifiedData = JSON.stringify(lawyerNames);

  return {
    props: {
      lawyerNames: stringifiedData,
    },
  };
}

export default AddCases;
