import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";

function DistributorSignUp() {
  const [firstNameTH, setFirstNameTH] = useState("");
  const [lastNameTH, setLastNameTH] = useState("");
  const [firstNameEN, setFirstNameEN] = useState("");
  const [lastNameEN, setLastNameEN] = useState("");
  const [Gender, setGender] = useState("");
  const [BirthDate, setbirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [Province, setProvice] = useState("");
  const [Country, setCountry] = useState("");
  const [ZipCode, setZipCode] = useState("");

  const [email, setEmail] = useState("");
  const [DistributorName, setDistributorName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUpDistributor } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);

  const handleSubmitSignUp = async (e) => {
    console.log("handleSubmitSignUp");
    try {
      e.preventDefault();
      // validate input first

      // end validate
      await signUpDistributor({
        email,
        DistributorName,
        password,
        confirmPassword,
        firstNameTH,
        lastNameTH,
        firstNameEN,
        lastNameEN,
        Gender,
        BirthDate,
        phoneNumber,
        Address,
        District,
        Province,
        Country,
        ZipCode,
      });

      console.log();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form
      className="flex w-full justify-evenly h-[747px] bg-[#F8F8F8]"
      onSubmit={handleSubmitSignUp}
    >
      <div className=" flex-col  w-[700px] h-[800px] ">
        {/* <LoginText /> */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-wrap grid-cols-2 mt-[100px]">
          <div className="text-[36px] text-black ml-[120px] mb-[30px]">{`Distributor SignUp`}</div>
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
          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="Gender"
              >
                {`Gender`}
              </label>
              <select
                className="select-md shadow appearance-none border border-red rounded w-[300px] text-grey-darker mb-3 rounded-full"
                value={Gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  // console.log("gender :" + e.target.value);
                }}
              >
                <option disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>None</option>
              </select>
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="BirthDate"
              >
                {`Birth Date`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="date"
                placeholder="dd-mm-yyyy"
                min="1900-01-01"
                max="2050-12-31"
                value={BirthDate}
                onChange={(e) => setbirthDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
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
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="Address"
              >
                {`Address`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
            {" "}
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="District"
              >
                {`District`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="District"
                value={District}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="Province"
              >
                {`Province`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Province"
                value={Province}
                onChange={(e) => setProvice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-evenly  ">
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="Country"
              >
                {`Country`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="Country"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="ZipCode"
              >
                {`ZipCode`}
              </label>
              <input
                className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
                type="text"
                placeholder="ZipCode"
                value={ZipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-evenly  "></div>
          <div class="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="email"
            >
              {`Email`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[500px] text-grey-darker mb-3 rounded-full"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-6 ">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="distributorName"
            >
              {`DistributorName`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[500px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="DistributorName"
              value={DistributorName}
              onChange={(e) => setDistributorName(e.target.value)}
            />
          </div>

          <div className="mb-6 ml-[10px]">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 ml-[10px]">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="password"
              placeholder="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between ml-[10px]">
            <button
              className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
              type="submit"
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

export default DistributorSignUp;
