import React, { useState } from "react";
import Papa from "papaparse";

function App() {
  const [convertedRawData, setConvertedRawData] = useState([]);
  console.log("convertedRawData: ", convertedRawData);
  const keys = convertedRawData[0];
  const values = convertedRawData.slice(1, convertedRawData.length);
  function createObjects(keys, values) {
    let result = [];
    for (let i = 0; i < values.length; i++) {
      let obj = {};
      for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = values[i][j];
      }
      result.push(obj);
    }
    return result;
  }
  // const convertedObject = createObjects(keys, values);
  // console.log("convertedObject:", convertedObject);
  // const convertedObject = createObjects(keys, values);
  const convertedObject = createObjects(keys, values);
  // console.log("convertedObject:", convertedObject);
  // console.log("convertedObject:", convertedObject);
  console.log("convertedObject:", convertedObject);
  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function (results) {
                setConvertedRawData(results.data);
                console.log("Finished:", results.data);
              },
            });
          }
        }}
      />
    </div>
  );
}

export default App;
