
import styles from './App.module.css';
import "./Variables.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import InfoPage from './Pages/InfoPage';



function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/InfoPage' element={<InfoPage />} />
            </Routes>
        </BrowserRouter>

       </header>
       <body>

       </body>
    </div>
  );
}

export default App;
