import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(data));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          title="Password must be at least 7 characters long"
          pattern=".{7,}"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
