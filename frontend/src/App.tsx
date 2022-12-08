import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AppThemeProvider from "./theme/AppThemeProvider";
import { ProtectedRoute } from "./utils/routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  
  return ( 
    <AuthProvider>
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
        <Toaster />
      </AuthProvider>
    </AppThemeProvider>
    </AuthProvider> 
  );
}

export default App;
