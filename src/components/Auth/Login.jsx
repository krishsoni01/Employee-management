import { useState } from "react";

const Login = (props) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.HandleLogin(email, password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={SubmitHandler}
        className="border border-green-400 rounded-xl p-6 sm:p-8 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-6"
      >
        <h1 className="mb-4 text-center font-bold text-xl sm:text-2xl text-white">
          Enter Credentials 🔐
        </h1>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          type="email"
          placeholder="Enter email"
          className="bg-transparent border border-green-400 w-full text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
          type="password"
          placeholder="Enter password"
          className="bg-transparent border border-green-400 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 rounded-full font-semibold transition duration-200"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
