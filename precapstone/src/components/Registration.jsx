import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/authSlice";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(form)).then(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
