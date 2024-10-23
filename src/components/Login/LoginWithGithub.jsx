import { useForm } from "react-hook-form";


const LoginWithGithub = ({setData,formActiveHandler}) => {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setData(data)
  };

  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field mt-3">
          <input
            type="text"
            {...register('username', {
              required: 'Email or Username is required',
            })}
            className="form-control"
            placeholder="Username or email address"
          />
          {errors.username && <p className="invalid-field">{errors.username.message}</p>}
      </div>
      <div className="form-field mt-3 mb-2">
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
              maxLength: { value: 15, message: 'Password cannot exceed 15 characters' },
              validate: {
                capitalized: (value) =>
                  /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                specialChar: (value) =>
                  /[!@#$%^&*]/.test(value) || 'Password must contain at least one special character',
                number: (value) => /\d/.test(value) || 'Password must contain at least one number',
                noSpaces: (value) => !/\s/.test(value) || 'Password cannot contain spaces',
              },
            })}
            placeholder="Password"
            className="form-control"
          />
          {errors.password && <p className="invalid-field">{errors.password.message}</p>}
      </div>

      <button type="submit" className="btn primary-bg w-100 my-3 mb-2">Sign In</button>
    </form>

    <div className="mx-auto mb-3 text-secondary w-100 text-center">Don&apos;t have an account? <span className="primary-link" onClick={() => formActiveHandler('Register')}> Sign up</span></div>
    </>
  )
}

export default LoginWithGithub