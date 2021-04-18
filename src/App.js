import "./App.css";

import Data from "./Data/services.json";

import Filters from "./Components/Filters/Filters";
import ServiceListing from "./Components/ServiceListing/ServiceListing";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Filters data={Data} />
      <ServiceListing numbers={numbers} data={Data} />
    </div>
  );
}

export default App;
