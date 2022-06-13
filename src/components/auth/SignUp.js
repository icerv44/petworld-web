import React from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      // validate input first

      // end validate
      await signUp({
        firstName,
        lastName,
        emailOrPhone,
        password,
        confirmPassword,
      });

      closeModal();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form
      className="flex w-full h-[747px] bg-[#F8F8F8]"
      onSubmit={handleSubmitSignUp}
    >
      <div className=" flex-col flex-nowrap w-[700px] h-[800px] ml-[35%] ">
        {/* <LoginText /> */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mt-[100px]">
          <div class="mb-4">
            {/* <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker rounded-full"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /> */}
          </div>
          <div className="mb-6">
            {/* <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          </div>
          <div className="flex items-center justify-between">
            {/* <button
              className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
              type="button"
              // onClick={handleSubmitLogin}
            >
              เข้าสู่ระบบ
            </button>
            <a
              className="inline-block align-baseline font-bold text-[20px] text-blue-400 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
