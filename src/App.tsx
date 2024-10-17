import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { URL_PATHS } from '~constants/paths';
import Home from '~pages/home';
import Details from '~pages/details';
import { PortfolioItems } from '~constants/common';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: URL_PATHS.REAL_ESTATE,
    element: (
      <Details config={PortfolioItems.REDJ} />
    )
  },
  {
    path: URL_PATHS.OFIE,
    element: (
      <Details config={PortfolioItems.OFIE} />
    )
  },
  {
    path: URL_PATHS.OEIH,
    element: (
      <Details
        config={PortfolioItems.OEIH}
        customStyling={true}
      />
    )
  }
]);

export default () => (
  <>
    <RouterProvider router={router} />
  </>
);
