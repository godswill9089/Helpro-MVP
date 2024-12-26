import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../views/pages/home/Home';
import Layout from '../views/layouts/Layout';
import About from '../views/pages/About';
import ContactUs from '../views/pages/contact-us/ContactUs';
import Faq from '../views/pages/faq/Faq';

function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: '/',
      children: [
        { element: <Home />, path: '/' },
        { element: <Home />, path: '/products' },
        { element: <Faq />, path: '/faq' },
        { element: <ContactUs />, path: '/contact-us' },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
