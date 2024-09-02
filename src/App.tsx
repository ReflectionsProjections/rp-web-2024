import { VStack } from '@chakra-ui/react';
import '@fontsource/kufam';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Home/Info";
import Header from "./components/Home/Landing";
import { NavBar } from "./components/NavBar";
import Config from "./config";
import Auth from "./routes/Auth";
import MainPage from "./routes/MainPage";
import Registration from "./routes/Registration";
import Temp from "./routes/Template";
import './App.css';
import Footer from './components/Footer';

function ProdRoutes() {
	return (
		<Routes>
			<Route path="/register" element={<Registration/>} />
			<Route path="/auth/" element={<Auth/>}> </Route>
			<Route path="/" element={<VStack spacing={0}>
				<NavBar />
				<Header />
				<Info/>
				<Footer/>
			</VStack>}> 
			</Route>
		</Routes>
	);
}

function DevRoutes() {
	return (
		<Routes>
			{/* <Route path="/register" element={<Registration/>} /> */}
			<Route path="/auth/" element={<Auth/>}> </Route>
			<Route path="/schedule/" element={<Temp text="schedule" />}> </Route>
			<Route path="/questions/" element={<Temp text="questions" />}> </Route>
			<Route path="/" element={<MainPage/>} />
			<Route path="*" element={<Temp text="404" />} />
		</Routes>
	);
}

function App() {
	return (
		<BrowserRouter>
			{Config.IS_PROD ? <ProdRoutes /> : <DevRoutes />}
		</BrowserRouter>
	);
}

export default App;