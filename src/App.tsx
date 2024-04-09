import { useState } from "react";
import "./App.css";
import ApplicationRoutes from "./components/Route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ApplicationRoutes />
      </div>
    </>
  );
}

export default App;
