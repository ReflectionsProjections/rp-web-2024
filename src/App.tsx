import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hype from "./routes/Hype";
import Temp from "./routes/Template";
import Config from "./config";

function ProdRoutes() {
	return (
		<Routes>
			<Route path="*" element={<Hype/>} />
		</Routes>
	)
}

function DevRoutes() {
	return (
		<Routes>
			<Route path="/auth/" element={<Temp text="auth" />}> </Route>
			<Route path="/schedule/" element={<Temp text="schedule" />}> </Route>
			<Route path="/questions/" element={<Temp text="questions" />}> </Route>
			<Route path="/" element={<Temp text="home" />} />
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