import { useForm } from "react-hook-form"


const LoginWithGoogle = ({setData,formActiveHandler}) => {
  const {register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    console.log('data..',data)
    setData(data)
  };

  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field mt-3">
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            className="form-control"
            placeholder="Email"
          />
          {errors.email && <p className="invalid-field">{errors.email.message}</p>}
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

export default LoginWithGoogle