import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hype from "./routes/TestChange";
import Temp from "./routes/Template";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/auth/" element={<Hype/>}> </Route>
				<Route path="/schedule/" element={<Hype/>}> </Route>
				<Route path="/questions/" element={<Hype/>}> </Route> */}
				<Route path="/" element={<Hype/>} />
				<Route path="*" element={<Temp text="404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;