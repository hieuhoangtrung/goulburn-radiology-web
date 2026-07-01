import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useEffect } from 'react';
const ReferrersPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
};
export default ReferrersPage;
