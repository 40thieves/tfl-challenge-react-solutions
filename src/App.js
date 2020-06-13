import React, { useState } from "react";

import ModeSelect from "./ModeSelect";

function App() {
	const [mode, setMode] = useState(null);

	function handleSelectedMode(selectedMode) {
		setMode(selectedMode);
	}

	return (
		<div className="m-4">
			<header className="text-3xl mb-8">
				<h1>Transport For London Line Information</h1>
			</header>
			<div className="w-full px-3 mb-4">
				<ModeSelect handleSelectedMode={handleSelectedMode} />
				You selected mode: {mode}
			</div>
		</div>
	);
}

export default App;
