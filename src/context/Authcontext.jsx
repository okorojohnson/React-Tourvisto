import { createContext, useContext, useEffect } from "react";
import { useAuth as useClerkAuth, useUser, useClerk } from "@clerk/clerk-react";
import { useFetcher, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isSignedIn, signOut: clerkSignOut, isLoaded } = useClerkAuth();
  const { user, isLoaded: userLoaded } = useUser();
  const navigate = useNavigate();
  const { redirectToSignIn } = useClerk();

  useEffect(() => {
    console.log("Auth Status", { isLoaded, userLoaded, isSignedIn, user });
    console.log("Clerk User Data:", user);
  }, [isLoaded, userLoaded, isSignedIn, user]);

  const signIn = () => {
    console.log("Sign In Button Clicked");
    redirectToSignIn({ redirectUrl: "/Home" });
  };

  const signOut = async () => {
    try {
      await clerkSignOut();
      navigate("/");
    } catch (error) {
      console.error("signOut error:", error);
    }
  };

  const value = {
    user,
    isSignedIn: isSignedIn && !!user,
    isLoaded: isLoaded && !!userLoaded,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
