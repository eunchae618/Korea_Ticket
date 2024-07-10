import {Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import MyPage from './pages/myPage';
import Inquiries from './pages/inquiries';
import GameList from './pages/gameList';
import BookingPage from './pages/bookingPage';
import ReviewBoard from './pages/reviewBoard';
import SeatingChart from './pages/seatingChart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" exact={true} element={<Main />} />
        <Route path= "/bookingPage" element={<BookingPage />} />
        <Route path= "/gameList" element={<GameList />} />
        <Route path= "/inquiries" element={<Inquiries />} />
        <Route path= "/myPage" element={<MyPage />} />
        <Route path= "/reviewBoard" element={<ReviewBoard />} />
        <Route path= "/seatingChart" element={<SeatingChart />} />
      </Routes>
    </div>
  );
}

export default App;