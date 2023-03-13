import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(data));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
