import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VStack } from '@chakra-ui/react';
import Temp from "./routes/Template";
import Config from "./config";
import { NavBar } from "./components/NavBar";
import Header from "./components/Home/Landing";
import MainPage from "./routes/MainPage";
import '@fontsource/kufam';
import Info from "./components/Home/Info";
import './App.css';

function ProdRoutes() {
	return (
		<Routes>
			<Route path="*" element={<VStack spacing={0}>
				<NavBar />
				<Header />
				<Info/>
			</VStack>}> 
			</Route>
		</Routes>
	);
}

function DevRoutes() {
	return (
		<Routes>
			<Route path="/auth/" element={<Temp text="auth" />}> </Route>
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

/*
<Route path="/" element={<LandingPage text="home"/>}> </Route>
*/ 
