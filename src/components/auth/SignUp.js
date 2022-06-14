import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import Datepicker from "flowbite-datepicker/Datepicker";

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

  const [email, setEmail] = useState("");
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
        firstNameEN,
        lastNameEN,
        gender,
        birthDate,
        phoneNumber,
        address,
        district,
        provice,
        country,
        zipCode,
        email,
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
              for="firstNameTH"
            >
              {`Fisrt Name(TH)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="Fisrt Name(TH)"
              value={firstNameTH}
              onChange={(e) => setFirstNameTH(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="lastNameTH"
            >
              {`Last Name(TH)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="Last Name(TH)"
              value={lastNameTH}
              onChange={(e) => setLastNameTH(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="firstNameEN"
            >
              {`First Name(EN)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="First Name(EN)"
              value={firstNameEN}
              onChange={(e) => setFirstNameEN(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="lastNameEN"
            >
              {`Last Name(EN)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="Last Name(EN)"
              value={lastNameEN}
              onChange={(e) => setLastNameEN(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="gender"
            >
              {`gender`}
            </label>
            <select
              class="w-full py-2 px-3 mb-3 shadow appearance-none border border-red rounded rounded-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>none</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="birthDate"
            >
              {`Birth Date`}
            </label>
            <div className="flex items-center justify-center">
              <div
                className="datepicker relative form-floating mb-3 xl:w-96"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  data-mdb-toggle="datepicker"
                />
                <label for="floatingInput" className="text-gray-700">
                  Select a date
                </label>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="firstName"
            >
              {`Last Name(TH)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="First name"
              value={lastNameTH}
              onChange={(e) => setLastNameTH(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="firstName"
            >
              {`Last Name(TH)`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
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
