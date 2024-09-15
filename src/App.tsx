import { VStack } from '@chakra-ui/react';
import '@fontsource/kufam';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import FAQ from './components/Home/FAQ';
import Info from "./components/Home/Info";
import Header from "./components/Home/Landing";
import Sponsors from './components/Home/Sponsors';
import { NavBar } from "./components/NavBar";
import Config from "./config";
import Auth from "./routes/Auth";
import Events from './routes/Events';
import MainPage from "./routes/MainPage";
import MyQR from './routes/myQR';
import MyRP from './routes/MyRP';
import PageNotFound from './routes/PageNotFound';
import { PrivacyPolicy } from './routes/PrivacyPolicy';
import Registration from "./routes/Registration";
import Speakers from "./routes/Speakers";
import Temp from "./routes/Template";
import UpdateResume from "./routes/UpdateResume";

function ProdRoutes() {
	return (
		<Routes>
			<Route path="/privacy" element={<PrivacyPolicy/>} />
			<Route path="/register" element={<Registration/>} />
			<Route path="/auth/" element={<Auth/>}> </Route>
			<Route path="/update/" element={<UpdateResume/>}> </Route>
			<Route path="/speakers" element={<Speakers/>}></Route>
			<Route path="/" element={<VStack spacing={0}>
				<NavBar />
				<Header />
				<Info/>
				<Events/>
				<FAQ/>
				<Sponsors/>
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
			<Route path="/update/" element={<UpdateResume/>} /> 
			<Route path="/schedule/" element={<Temp text="schedule" />} /> 
			<Route path="/questions/" element={<Temp text="questions" />} /> 
			<Route path="/speakers" element={<Speakers/>}></Route>
			<Route path="/myrp/" element={<MyRP/>} />
			<Route path="/myqr/" element={<MyQR/>} />
			<Route path="/" element={<MainPage/>} />
			<Route path="*" element={<PageNotFound/>} />
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
