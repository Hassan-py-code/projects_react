import { useState } from "react";

import data from "./Data.js";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnable] = useState(false);
  const [Multiple, setMultiple] = useState([]);

  function handleSingSelect(getCurentId) {
    setSelected(getCurentId === selected ? null : getCurentId);
  }

  function handleMultiSelection(getCurentId) {
    let cpyMutiple = [...Multiple];
    const findIndexOfCurrenId = cpyMutiple.indexOf(getCurentId);

    if (findIndexOfCurrenId === -1) cpyMutiple.push(getCurentId);
    else cpyMutiple.splice(findIndexOfCurrenId, 1);

    setMultiple(cpyMutiple);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnable(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingSelect(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>

                  <span>+</span>
                </div>

                {
                     enableMultiSelection ? Multiple.indexOf(dataItem.id) !== -1 &&
                     <div className="content"> {dataItem.answer}</div> : 
                     selected === dataItem.id &&  <div className="content"> {dataItem.answer}</div>
                }

              </div>
            ))
          ) : (
            <div>no data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
