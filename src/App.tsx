
import { QueryClient, QueryClientProvider } from "react-query";
import './App.scss';
import {
  RouterProvider,
} from "react-router-dom";
import router from "router";
import { Provider as MetaDataProvider } from 'utils/hooks/useMetaData'
import { Provider as StoreProvider } from 'store'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient();

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<StoreProvider>
				<HelmetProvider>
					<MetaDataProvider>
						<RouterProvider router={router} />
					</MetaDataProvider>
				</HelmetProvider>
			</StoreProvider>
		</QueryClientProvider>
  );
}

export default App;
