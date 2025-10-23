import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import AuthProvider from './contexts/auth';

function App() {
  return (
	<AuthProvider>
    
            <RoutesApp/>

    
	</AuthProvider>
  );
}

export default App;
