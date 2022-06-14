import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";

function SignUp() {
  const [firstNameTH, setFirstNameTH] = useState("");
  const [lastNameTH, setLastNameTH] = useState("");
  const [firstNameEN, setFirstNameEN] = useState("");
  const [lastNameEN, setLastNameEN] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [provice, setProvice] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [userName, setUserName] = useState("");
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
        firstNameTH,
        lastNameTH,
        userName,
        password,
        confirmPassword,
      });
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
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="firstName"
            >
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="First name"
              value={firstNameTH}
              onChange={(e) => setFirstNameTH(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="firstName"
            >
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="First name"
              value={lastNameTH}
              onChange={(e) => setLastNameTH(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
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
            />
          </div>
          <div className="mb-6">
            <label
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
            />
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
