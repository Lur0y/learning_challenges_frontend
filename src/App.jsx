import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Home from "./pages/Home";
import FollowCursor from "./pages/FollowCursor";

export default function App() {
	
	return(
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="*" element={<h1>No tengo 404 xd</h1>} />
						<Route path="tictactoe" element={<TicTacToe />} />
						<Route path="followcursor" element={<FollowCursor />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);

}
