import "./App.css";
import AuthProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <AppRouter>
        <ToastContainer />
      </AppRouter>
    </AuthProvider>
  );
}

export default App;
