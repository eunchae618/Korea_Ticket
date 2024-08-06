import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import MyPage from "./pages/myPage";
import Inquiries from "./pages/inquiries";
import GameList from "./pages/gameList";
import FinalTicket from "./components/Game/FinalTicket";
import ReviewBoard from "./pages/review/ReviewBoard";
import ReviewDetail from "./pages/review/ReviewDetail";
import ReviewWrite from "./pages/review/ReviewWrite";
import Seat from "./components/Game/Seat";
import PswChange from "./pages/pswChange";
import Quit from "./pages/quit";
import QnaPage from "./pages/QaPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/FinalTicket" element={<FinalTicket />} />
        <Route path="/gameList" element={<GameList />} />
        <Route path="/inquiries" element={<Inquiries />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/reviewBoard" element={<ReviewBoard />} />
        <Route path="/reviewBoard/:id" element={<ReviewDetail />} />
        <Route path="/reviewWrite" element={<ReviewWrite />} />
        <Route path="/Seat" element={<Seat />} />
        <Route path="/myPage/pswChange" element={<PswChange />} />
        <Route path="/myPage/quit" element={<Quit />} />
        <Route path="/myPage/QaPage" element={<QnaPage />} />
      </Routes>
    </div>
  );
}

export default App;
