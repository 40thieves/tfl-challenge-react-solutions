import React, { useState, useEffect } from "react";

function ModeSelect(props) {
  const [modes, setModes] = useState([]);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then(res => res.json())
      .then(data => {
        setModes(data);
      });
  }, []);

  function handleChange(event) {
    if (event.target.value) {
      props.handleSelectedMode(event.target.value);
    }
  }

  return (
    <div className="mb-4">
      <label className="block tracking-wide text-gray-700 mb-2" htmlFor="mode">
        Mode of Transport
      </label>
      <select
        onChange={handleChange}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="mode"
      >
        <option>Choose...</option>
        {modes.map(mode => {
          return (
            <option key={mode.modeName} value={mode.modeName}>
              {mode.modeName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ModeSelect;
