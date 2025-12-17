// import React, { Suspense  from "react";
import SignIn from "@/features/auth/components/SignIn";

const SignInPage = () => {
  return (
    <main className="grid grid-cols-1 gap-y-16 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
      <SignIn />
    </main>
  );
};

export default SignInPage;