import "./App.css";
import AuthProvider from "./context/AuthContext";
import UAVProvider from "./context/UAVContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <UAVProvider>
        <AppRouter>
          <ToastContainer />
        </AppRouter>
      </UAVProvider>
    </AuthProvider>
  );
}

export default App;
