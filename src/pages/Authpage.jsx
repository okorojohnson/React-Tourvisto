{
  /*import { useAuth } from "@clerk/clerk-react";
import { FaGoogle } from "react-icons/fa";

const Authpage = () => {
  const { SignIn } = useAuth;
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/AuthBG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center gap-2">
            <img src="/Logo.svg" alt="Company Logo" />
            <h1 className="font-t_jaka text-[28px] font-bold">Tourvisto</h1>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="font-semibold capitalize mt-8">
              Start Your Travel Journey
            </h2>
            <p className="text-t_paragraph text-lg mt-3">
              Sign in with Google to explore AI-generated itineraries, trending
              destinations, and much more
            </p>
          </div>
          <button
            onClick={SignIn}
            className="w-full bg-t_blue hover:bg-t_blue/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-[30px]"
          >
            <FaGoogle /> <span>sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
*/
}

import { useClerk } from "@clerk/clerk-react";
import { FaGoogle } from "react-icons/fa";

const Authpage = () => {
  const { redirectToSignIn } = useClerk();

  const handleGoogleSignIn = () => {
    redirectToSignIn({ redirectUrl: "/Home" });
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/AuthBG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Auth Box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
          {/* Logo */}
          <div className="flex justify-center gap-2 items-center">
            <img src="/Logo.svg" alt="Company Logo" className="h-10" />
            <h1 className="font-t_jaka text-[28px] font-bold text-t_blue">
              Tourvisto
            </h1>
          </div>

          {/* Message */}
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="font-semibold mt-8 text-xl">
              Start Your Travel Journey
            </h2>
            <p className="text-t_paragraph text-lg mt-3 px-3">
              Sign in with Google to explore AI-generated itineraries, trending
              destinations, and much more.
            </p>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-t_blue hover:bg-t_blue/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-8"
          >
            <FaGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
