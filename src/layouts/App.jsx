import { lazy } from 'react';

export const AppHeader = lazy(() => import('./AppHeader.jsx'));
export const AppHome = lazy(() => import('./AppHome.jsx'));
export const AppServices = lazy(() => import('./AppServices.jsx'));
export const AppPricing = lazy(() => import('./AppPricing.jsx'));
export const AppContact = lazy(() => import('./AppContact.jsx'));
export const AppFooter = lazy(() => import('./AppFooter.jsx'));

export default function App(){
 return(
		<>
			<AppHeader />
			<AppHome />
			<AppServices />
			<AppPricing />
			<AppContact />
			<AppFooter />
		</>
  )
}