import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import AppRoutes from "./AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { AppProvider } from "./context/AppProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <div className="flex-col min-h-screen h-screen justify-between">
            <Navbar />
            <div className="min-h-full">
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
