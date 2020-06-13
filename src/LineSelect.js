import React, { useState, useEffect } from "react";

function LineSelect(props) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!props.mode) return;

    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.mode}`)
      .then(res => res.json())
      .then(lines => {
        setLines(lines);
      });
  }, [props.mode]);

  function handleChange(event) {
    if (event.target.value) {
      props.handleSelectedLine(event.target.value);
    }
  }

  if (!props.mode) {
    return null;
  } else {
    return (
      <div className="mb-6">
        <label
          className="block tracking-wide text-gray-700 mb-2"
          htmlFor="line"
        >
          Line
        </label>
        <select
          onChange={handleChange}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="line"
        >
          <option>Choose...</option>
          {lines.map(line => {
            return (
              <option key={line.id} value={line.id}>
                {line.id}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default LineSelect;
