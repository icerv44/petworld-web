import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await logout();
      navigation(`/pet`, { replace: true });
      alert("Logout");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div class="navbar bg-base-100 bg-[#735FE7]">
        <div class="flex-none ">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 bg-[#735FE7]">
          <a class="btn btn-ghost normal-case text-xl ml-[100px] text-white">{`Distributor Header`}</a>
        </div>
        <div className="w-full ">
          <button
            className="bg-[#FEBF23] w-[100px] h-[35px] ml-[50px] mt-[10px] rounded-full ml-[1450px]"
            onClick={handleSubmitLogin}
          >
            Logout
          </button>
        </div>
        {/* <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default AdminHeader;
