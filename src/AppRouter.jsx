// src/AppRouter.jsx




import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import SignIn  from "./pages/SignIn.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import EmailValidation from "./pages/EmailValidation.jsx";
import SignUp from "./pages/SignUp.jsx";
import NoPage from "./pages/NoPage.jsx";
import ResetPassword from "./components/authentication /ResetPassword.jsx";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>s
                <Route index element={<Home />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/forgetpassword" element={<ForgetPassword />}/>
                <Route path="/emailvalidation" element={<EmailValidation />}/>
                <Route path="/signupcandidate" element={<SignUp />}/>
                <Route path="*" element={<NoPage />}/>
                <Route path="/resetpassword" element={<ResetPassword />}/>


            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
