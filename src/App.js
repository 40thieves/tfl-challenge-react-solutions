import React, { useState } from "react";

import ModeSelect from "./ModeSelect";
import LineSelect from "./LineSelect";
import Line from "./Line";

function App() {
	const [mode, setMode] = useState(null);
	const [line, setLine] = useState(null);

	function handleSelectedMode(selectedMode) {
		setMode(selectedMode);
	}

	function handleSelectedLine(selectedLine) {
		setLine(selectedLine);
	}

	return (
		<div className="m-4">
			<header className="text-3xl mb-8">
				<h1>Transport For London Line Information</h1>
			</header>

			<div className="w-full px-3 mb-4">
				<ModeSelect handleSelectedMode={handleSelectedMode} />
				<LineSelect mode={mode} handleSelectedLine={handleSelectedLine} />
				<Line line={line} />
			</div>
		</div>
	);
}

export default App;
