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

  return <div>SignUp</div>;
}

export default SignUp;
