import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VoucherHome from './pages/VoucherHome/VoucherHome';
import VoucherCreate from './pages/VoucherCreate/VoucherCreate';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<></>}
				/>
				<Route
					path='/Home'
					element={<VoucherHome />}
				/>
				<Route
					path='/Create'
					element={<VoucherCreate />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
