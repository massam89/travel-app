import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Bucket from "./pages/Bucket";
import ResortDetails from "./pages/ResortDetails";
import ResortsList from "./pages/ResortsList";
import NoPage from "./pages/NoPage";
import { useState } from "react";

function App() {

  const [isBucketPage, setIsBucketPage] = useState(false)

  const changeBucketPageHandler = () => {
    setIsBucketPage(!isBucketPage)
  }

  return (
    <div className="container">
      <Header changeBucket={changeBucketPageHandler} isBucketPage={isBucketPage} />
      <Routes>
        <Route index element={<ResortsList />} />
        <Route path="resorts/:id" element={<ResortDetails />} />
        <Route path="bucket" element={<Bucket />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
