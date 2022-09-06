import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
 <>
      <Topbar />
      <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/register" element={currentUser?<Homepage/>:<Register/>}/>
       <Route path="/login" element={currentUser?<Homepage/>:<Login/>}/>
       <Route path="/write" element={currentUser?<Write/>:<Register/>}/>
       <Route path="/settings" element={currentUser?<Settings/>:<Register/>}/>
       <Route path="/post/:postId" element={<Single/>}/>

   </Routes>
   </>
  );
}

export default App;
