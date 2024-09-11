import { VStack } from '@chakra-ui/react';
import Events from "./routes/Events";
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
import UpdateResume from "./routes/UpdateResume";
import './App.css';
import { PrivacyPolicy } from './routes/PrivacyPolicy';
import PageNotFound from './routes/PageNotFound';
import Footer from './components/Footer';
import FAQ from './components/Home/FAQ';
import Speakers from "./routes/Speakers";

function ProdRoutes() {
	return (
		<Routes>
			<Route path="/privacy" element={<PrivacyPolicy/>} />
			<Route path="/register" element={<Registration/>} />
			<Route path="/auth/" element={<Auth/>}> </Route>
			<Route path="/update/" element={<UpdateResume/>}> </Route>
			<Route path="/" element={<VStack spacing={0}>
				<NavBar />
				<Header />
				<Info/>
				<Events/>
				<FAQ/>
				<Footer/>
			</VStack>}> 
			</Route>
			<Route path="*" element={<PageNotFound/>} />
		</Routes>
	);
}

function DevRoutes() {
	return (
		<Routes>
			<Route path="/privacy" element={<PrivacyPolicy/>} />
			<Route path="/register" element={<Registration/>} />
			<Route path="/auth/" element={<Auth/>}> </Route>
			<Route path="/update/" element={<UpdateResume/>}> </Route>
			<Route path="/schedule/" element={<Temp text="schedule" />}> </Route>
			<Route path="/questions/" element={<Temp text="questions" />}> </Route>
			<Route path="/speakers" element={<Speakers/>}></Route>
			<Route path="/" element={<MainPage/>} />
			<Route path="/events" element={<Events/>}></Route>
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