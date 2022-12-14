import React from "react";
function App() {
  const api = {
    key: "ae7c4fe641cf0378e52c9b4b2170158f",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  return (
    <div className="app ">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
