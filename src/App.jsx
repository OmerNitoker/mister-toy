import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/store'

import { AppHeader } from "./cmps/AppHeader";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { ToyIndex } from "./pages/ToyIndex";
import { ToyDetails } from "./pages/ToyDetails";
import { AppFooter } from "./cmps/AppFooter";

import './assets/style/main.css'

export function App() {
  return (
    <Provider store={store}>
    < Router >
      <section className="main-layout app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutUs />} path="/about" />
            <Route element={<ToyIndex />} path="/toy" />
            <Route element={<ToyDetails />} path="/toy/:toyId" />
          </Routes>
        </main>
        <AppFooter />

      </section>
    </Router >
    </Provider>
  )
}