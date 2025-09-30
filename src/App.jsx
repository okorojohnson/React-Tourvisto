import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ClerkProvider, useAuth } from "@clerk/clerk-react"; // Add useAuth import
import { AuthProvider } from "./context/Authcontext";
import { DestinationProvider } from "./context/DestinationContext";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/Homepage";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Optional: Add Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <div className="overflow-x-hidden font-t_figtree text-t_black">
      <ErrorBoundary>
        <Router>
          <ClerkProvider publishableKey={clerkPubKey}>
            <AuthProvider>
              <DestinationProvider>
                <Routes>
                  <Route path="/" element={<Authpage />} />
                  <Route
                    path="/Home"
                    element={
                      <ProtectedRoute>
                        <Homepage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </DestinationProvider>
            </AuthProvider>
          </ClerkProvider>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
