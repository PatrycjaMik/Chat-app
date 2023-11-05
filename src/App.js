import "./App.css";
import Navigation from "./components/Navigation";
import ChatContainer from "./pages/ChatContainer";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/chat" element={<ChatContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
