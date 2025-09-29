import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/Homepage";
import Detailspage from "./pages/Detailspage";
import Paymentpage from "./pages/Paymentpage";
import Confirmationpage from "./pages/Confirmationpage";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthProvider } from "./context/Authcontext";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <div className="overflow-x-hidden font-t_figtree text-t_black">
      <Router>
        <ClerkProvider publishableKey={clerkPubKey}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Authpage />} />
              <Route path="/Home" element={<Homepage />} />
              <Route path="/Details" element={<Detailspage />} />
              <Route path="/Payment" element={<Paymentpage />} />
              <Route path="/Confirmation" element={<Confirmationpage />} />
            </Routes>
          </AuthProvider>
        </ClerkProvider>
      </Router>
    </div>
  );
};

export default App;
