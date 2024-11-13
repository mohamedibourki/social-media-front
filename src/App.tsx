import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { VerifyEmail } from "./pages/VerifyEmail";
import { DashboardHome } from "./pages/DashboardHome.tsx";
import { Chats } from "./pages/Chats.tsx";
// import { DevChats } from "./pages/DevChats";
import { Layout } from "./layout";
import { DevChats } from "./pages/DevChats.tsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/home/chats" element={<Chats />} />
          <Route path="/home/chats/dev" element={<DevChats />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
