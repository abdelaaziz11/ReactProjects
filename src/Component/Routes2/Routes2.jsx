import About2 from './About2';
import App from '../../App';
const { BrowserRouter,Route, Routes } = require("react-router-dom");


const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/home" element={<App/>} />
            <Route path="/about" element={<About2/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
