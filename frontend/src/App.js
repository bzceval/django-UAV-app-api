import "./App.css";
import AuthProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <AppRouter>
        <div className="App"></div>
      </AppRouter>
    </AuthProvider>
  );
}

export default App;
