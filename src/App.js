import React from 'react';
import Layout from 'components/UI/layout';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "App.css";

import Home from 'components/Home';
import About from 'components/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={About()} path="/about" />
          <Route element={Home()} path="/" />
        </Routes>
      </Layout>
    </Router>
  );
}