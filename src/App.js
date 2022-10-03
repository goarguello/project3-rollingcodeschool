import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import StudentPage from './pages/StudentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/students' element={<StudentPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
