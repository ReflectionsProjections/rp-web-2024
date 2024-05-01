import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Template";
import { PageLayout } from "./components/PageLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLayout/>}> </Route>
				<Route path="/auth/" element={<Home text="auth"/>}> </Route>
				<Route path="/questions/" element={<Home text="questions"/>}> </Route>
				<Route path="*" element={<Home text="404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

/*
<Route path="/" element={<LandingPage text="home"/>}> </Route>
*/ 