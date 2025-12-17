import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="grid grid-cols-1 gap-y-10 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
      <h4 className="font-bold text-2xl text-center">Create Account</h4>
      <div className="grid grid-cols-1 gap-y-4 w-full md:w-3/5 lg:w-2/5 mx-auto">
        <div className="grid grid-cols-cc">
          <label htmlFor="fname" className="text-sm md:text-md">
            First name <strong className="text-red-500">*</strong>
          </label>
          <input
            type="text"
            name="f-name"
            id="fname"
            className="input rounded-md input-bordered input-sm"
            required
          />
        </div>
        <div className="grid grid-cols-cc">
          <label htmlFor="lname" className="text-sm md:text-md">
            Last name <strong className="text-red-500">*</strong>
          </label>
          <input
            type="text"
            name="l-name"
            id="lname"
            className="input rounded-md input-bordered input-sm"
            required
          />
        </div>
        <div className="grid grid-cols-cc">
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
        <div className="grid grid-cols-cc">
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
        <div className="grid grid-cols-cc">
          <label htmlFor="gender" className="text-sm md:text-md">
            Gender
          </label>
          <div className="flex items-center">
            <div className="mr-8">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male" className="ml-2">
                Male
              </label>
            </div>
            <div>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female" className="ml-2">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-cc">
          <label htmlFor="birthdate" className="text-sm md:text-md">
            Birth date
          </label>
          <input
            type="date"
            name="b-irthdate"
            id="birthdate"
            className="input rounded-md input-bordered input-sm"
          />
        </div>
        <div className="text-center">{/* alert */}</div>
        <div className="grid grid-cols-1 text-center gap-y-3">
          <button className="btn btn-neutral w-fit mx-auto rounded-md">
            Register
          </button>
        </div>
        <div className="border-t text-center p-4">
          <Link
            href="/auth/signin"
            className="text-stone-600 hover:text-slate-700"
          >
            Already have account?
          </Link>
        </div>
      </div>
    </form>
  );
}