import About from './About';
import App from '../../App';
const { BrowserRouter,Route, Routes, Outlet } = require("react-router-dom");


const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/home" element={<App/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
      <Outlet/>
    </>
  );
}

export default Routers;
