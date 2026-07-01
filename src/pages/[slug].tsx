// Catch-all for unknown slugs — redirect to 404
import { GetServerSideProps } from 'next';

const SlugPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  notFound: true,
});

export default SlugPage;
