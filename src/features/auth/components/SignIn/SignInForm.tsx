import Link from "next/link";

export default function SignInForm() {
  return (
    <form className="grid grid-cols-1 gap-y-10">
      <h4 className="font-bold text-2xl text-center">Login</h4>
      <div className="grid grid-cols-1 gap-y-4 w-full md:w-3/5 lg:w-2/5 mx-auto">
        <div className="grid grid-cols-cc items-center">
          <label htmlFor="email" className="text-sm md:text-md">
            E-mail <strong className="text-red-500">*</strong>
          </label>
          <input
            type="email"
            name="e-mail"
            id="signin-email"
            className="input rounded-md input-bordered input-sm"
            required
          />
        </div>
        <div className="grid grid-cols-cc items-center">
          <label htmlFor="password" className="text-sm md:text-md">
            Password <strong className="text-red-500">*</strong>
          </label>
          <input
            type="password"
            name="p-assword"
            id="password"
            className="input rounded-md input-bordered input-sm"
            required
          />
        </div>
        <div className="text-center">{/* alert */}</div>
        <div className="grid grid-cols-1 text-center gap-y-3">
          <Link
            href="#forgotpassword"
            className="text-stone-600 hover:text-slate-700"
          >
            Forgot password?
          </Link>
          <button className="btn btn-neutral w-fit mx-auto rounded-md">
            Connexion
          </button>
        </div>
        <div className="border-t text-center p-4">
          <Link
            href="/auth/register"
            className="text-stone-600 hover:text-slate-700"
          >
            Create account
          </Link>
        </div>
      </div>
    </form>
  );
}