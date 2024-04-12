import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Temp from "./routes/Template";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/" element={<Temp text="auth"/>}> </Route>
				<Route path="/schedule/" element={<Temp text="schedule"/>}> </Route>
				<Route path="/questions/" element={<Temp text="questions"/>}> </Route>
				<Route path="/" element={<Home/>} />
				<Route path="*" element={<Temp text="404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;


