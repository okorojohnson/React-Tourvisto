import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/Homepage";
import TripDetailspage from "./pages/TripDetailspage";
import Paymentpage from "./pages/Paymentpage";
import Confirmationpage from "./pages/Confirmationpage";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthProvider } from "./context/Authcontext";
import { DestinationProvider } from "./context/DestinationContext";
import { BackendDataContextProvider } from "./context/BackendDataContext";
import { LocalDataContextProvider } from "./context/LocalDataContext";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <div className="overflow-x-hidden font-t_figtree text-t_black">
      <Router>
        <ClerkProvider publishableKey={clerkPubKey}>
          <AuthProvider>
            <DestinationProvider>
              <BackendDataContextProvider>
                <LocalDataContextProvider>
                  <Routes>
                    <Route path="/" element={<Authpage />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route
                      path="/destination/:id"
                      element={<TripDetailspage />}
                    />
                    <Route path="/payment-stripe" element={<Paymentpage />} />
                    <Route
                      path="/payment-confirmation"
                      element={<Confirmationpage />}
                    />
                  </Routes>
                </LocalDataContextProvider>
              </BackendDataContextProvider>
            </DestinationProvider>
          </AuthProvider>
        </ClerkProvider>
      </Router>
    </div>
  );
};

export default App;
