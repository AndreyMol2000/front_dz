import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Header } from "./components/Header";

const LoginForm = lazy(() => import("/components/LoginForm"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
