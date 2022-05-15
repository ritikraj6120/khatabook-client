import './App.css';
import { ToastContainer } from 'react-toastify';
import UserState from './context/UserState';
import NoteState from './context/NoteState';
import CustomerState from './context/CustomerState';
import SupplierState from './context/SupplierState';
import Navbar from './components/Navbar';
import KhataBookRouterapp from './AllRoutes';
const App = () => {
	return (
		<UserState>
			<NoteState>
				<CustomerState>
					<SupplierState>
						<Navbar />
						{/* <Alert /> */}
						<ToastContainer />
						{/* <div className="container"> */}
						<KhataBookRouterapp />
						{/* </div> */}
					</SupplierState>
				</CustomerState>
			</NoteState>
		</UserState>
	);
};
export default App;