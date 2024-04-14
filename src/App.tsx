import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hype from "./routes/Hype";
import Temp from "./routes/Template";
import Config from "./config";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{Config.IS_PROD} ? 				
				{<Route path="*" element={<Hype/>} />}
				: 
				{<>
					<Route path="/auth/" element={<Hype/>}> </Route>
					<Route path="/schedule/" element={<Hype/>}> </Route>
					<Route path="/questions/" element={<Hype/>}> </Route>
					<Route path="/" element={<Hype/>} />
					<Route path="*" element={<Temp text="404" />} />
				</>}

			</Routes>
		</BrowserRouter>
	);
}

export default App;

