import AddCase from '@/components/AddCase';
import { connectToDatabase, getAllLawyerProfiles } from '@/helpers/db-utils';

function AddCases(props) {
  const { lawyerNames } = props;
  const parsedData = JSON.parse(lawyerNames);
  return <AddCase names={parsedData} />;
}

export async function getStaticProps() {
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
