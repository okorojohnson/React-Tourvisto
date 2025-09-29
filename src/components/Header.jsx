import React from "react";
import { useAuth } from "../context/Authcontext";
import { SiPanasonic } from "react-icons/si";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  const { signOut, user, isSignedIn } = useAuth();
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src="/Logo.svg" alt="Tourvisto" />
          <span className="font-t_jaka text-2xl font-bold text-t_black">
            Tourvisto
          </span>
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn && user && (
            <>
              <div className="flex items-center gap-4 ">
                <span className="text-right"></span>
                <span className="font-semibold">
                  {user.fullName ||
                    user.firstName ||
                    user.primaryEmailAddress?.emailAddress ||
                    "user"}
                </span>
              </div>
              <div>
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.firstName || user.fullName}
                    className="w-10 h-10 rounded-full "
                  />
                ) : (
                  <FaUser />
                )}
              </div>
              <button
                onClick={signOut}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-ful flex items-center justify-center transition-all duration-200 ease-linear "
              >
                <FaSignOutAlt className="text-red-500" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
