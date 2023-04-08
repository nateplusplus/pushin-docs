import ErrorPage from './pages/ErrorPage';
import Installation from './pages/Installation';
import Composition from './pages/Composition';
import About from "./pages/About";
import Target from "./pages/Target";
import Api from "./pages/Api";
import SimpleExample from './pages/SimpleExample';
import ResponsiveExample from './pages/ResponsiveExample';
import CatExample from './pages/CatExample';

const vPath = 'v5/';

export const paths = {
  'home'         : `/${vPath}`,
  'installation' : `/${vPath}installation`,
  'composition'  : `/${vPath}composition`,
  'target'       : `/${vPath}target`,
  'api'          : `/${vPath}api`,
  'simple'       : `/${vPath}examples/simple`,
  'responsive'   : `/${vPath}examples/responsive`,
  'cat'          : `/${vPath}examples/cat`,
};

export const routes = [
  {
    path: paths.home,
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: paths.installation,
    element: <Installation />,
  },
  {
    path: paths.composition,
    element: <Composition />,
  },
  {
    path: paths.target,
    element: <Target />,
  },
  {
    path: paths.api,
    element: <Api />,
  },
  {
    path: paths.simple,
    element: <SimpleExample />,
  },
  {
    path: paths.responsive,
    element: <ResponsiveExample />,
  },
  {
    path: paths.cat,
    element: <CatExample />,
  },
];