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
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-wrap grid-cols-2 mt-[100px]">
          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="firstNameTH"
              >
                {`Fisrt Name(TH)`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Fisrt Name(TH)"
                value={firstNameTH}
                onChange={(e) => setFirstNameTH(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="lastNameTH"
              >
                {`Last Name(TH)`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Last Name(TH)"
                value={lastNameTH}
                onChange={(e) => setLastNameTH(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="firstNameEN"
              >
                {`First Name(EN)`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
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
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Last Name(EN)"
                value={lastNameEN}
                onChange={(e) => setLastNameEN(e.target.value)}
              />
            </div>
          </div>

          {/* <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="gender"
            >
              {`gender`}
            </label>
            <select
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
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
          </div> */}

          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="birthDate"
              >
                {`Birth Date`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="date"
                placeholder="Birth Date"
                value={birthDate}
                onChange={(e) => setbirthDate(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="phoneNumber"
              >
                {`Phone Number`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
            {" "}
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="address"
              >
                {`Address`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="district"
              >
                {`District`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="provice"
              >
                {`Provice`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="provice"
                value={provice}
                onChange={(e) => setProvice(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="country"
              >
                {`Country`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="zipCode"
            >
              {`ZipCode`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ZipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="email"
            >
              {`Email`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              for="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
              type="password"
              placeholder="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
              type="button"
              // onClick={handleSubmitLogin}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
