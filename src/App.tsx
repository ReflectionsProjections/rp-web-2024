import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Template";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/" element={<Home text="auth"/>}> </Route>
				<Route path="/questions/" element={<Home text="questions"/>}> </Route>
				<Route path="/" element={<Home text="home"/>} />
				<Route path="*" element={<Home text="404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
