import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from './Pages/todo';
import Contact from './Pages/contact';

export default function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<ToDo/>}/>
        <Route path= "/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}