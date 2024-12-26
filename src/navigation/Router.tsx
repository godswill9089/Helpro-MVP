import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../views/pages/home/Home';
import Layout from '../views/layouts/Layout';
import ContactUs from '../views/pages/contact-us/ContactUs';
import Faq from '../views/pages/faq/Faq';
import Products from '../views/pages/products/Products';

function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: '/',
      children: [
        { element: <Home />, path: '/' },
        { element: <Products />, path: '/products' },
        { element: <Faq />, path: '/faq' },
        { element: <ContactUs />, path: '/contact-us' },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
