import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hype from "./routes/hype";
import Registration from "./routes/registration";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/" element={<Hype/>}> </Route>
				<Route path="/schedule/" element={<Hype/>}> </Route>
				<Route path="/registration/" element={<Registration/>}> </Route>
				<Route path="/questions/" element={<Hype/>}> </Route>
				<Route path="/" element={<Hype/>} />
				<Route path="*" element={<Hype/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;


