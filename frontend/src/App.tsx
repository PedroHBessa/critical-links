import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AppThemeProvider from "./theme/AppThemeProvider";
import { ProtectedRoute } from "./utils/routes/ProtectedRoute";

function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </AppThemeProvider>
  );
}

export default App;
