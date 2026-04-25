import { Navigate, useParams } from 'react-router-dom';
import Page from './Page';

const PageRoute = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  return <Page slug={slug} />;
};

export default PageRoute;
