import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import AddVideo from "./components/Add/AddVideo";
import SingleVideo from "./components/SingleVideo/SingleVideo";
import Footer from "./pages/Footer";
import EditPage from "./components/Edit/EditPage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/videos/:id" element={<SingleVideo />} />
        <Route path="/videos/edit/:id" element={<EditPage />} />
      </Routes>
    </Provider>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
