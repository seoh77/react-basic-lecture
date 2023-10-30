import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Route path="/movie">
//         <Detail />
//       </Route>
//       <Route path="/">
//         <Home />
//       </Route>
//     </Router>
//   );
// }

export default App;
