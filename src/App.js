import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./redux/features/success";
import Weather from "./redux/features/weather";

function App() {
  const onSumbit = (value) => {
    console.log({ value });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather submitSearch={onSumbit} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
