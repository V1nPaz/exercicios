import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth';

import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/React/ReactToastify.css"

function App() {
  return (
	<div className='App'>
		
		
		<ToastContainer autoClose={3000}/>
		<RoutesApp/>
		
	</div>
  );
}

export default App;
