import { useForm } from "react-hook-form"



const RegisterForm = ({setRegisterData,formActiveHandler}) => {
  const {register, handleSubmit,watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const {confirmPassword,...rest} = data
    setRegisterData(rest)
  };
  
  const password = watch('password');
  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between w-100">
            <div className="form-field mt-3 me-2">
                <input
                    type="text"
                    {...register('firstname', {
                    required: 'First name is required',
                    })}
                    className="form-control"
                    placeholder="First Name"
                />
                {errors.firstname && <p className="invalid-field">{errors.firstname.message}</p>}
            </div>
            <div className="form-field mt-3">
                <input
                    type="text"
                    {...register('lastname', {
                    required: 'Last name is required',
                    })}
                    className="form-control"
                    placeholder="Last Name"
                />
                {errors.lastname && <p className="invalid-field">{errors.lastname.message}</p>}
            </div>
      </div>
       
        <div className="form-field mt-3">
            <input
                type="text"
                    {...register('username', {
                    required: 'Username is required',
                    minLength: { value: 3, message: 'Username must be at least 3 characters' },
                    maxLength: { value: 30, message: 'Username cannot exceed 30 characters' },
                    validate: {
                      noSpaces: (value) => !/\s/.test(value) || 'No spaces allowed in username',
                    },
                  })}
                className="form-control"
                placeholder="Username"
            />
            {errors.username && <p className="invalid-field">{errors.username.message}</p>}
        </div>
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
      <div className="form-field mt-3">
            <input
                type="text"
                    {...register('mobile_number', {
                    required: 'Phone number is required',
                    validate: {
                      noSpaces: (value) => !/\s/.test(value) || 'No spaces allowed in phone number',
                      onlyNumbers: (value) => /^\d+$/.test(value) || 'Phone number must contain only digits',
                      validLength: (value) =>
                        value.length === 10 || 'Phone number must be exactly 10 digits',
                    },
                  })}
                className="form-control"
                placeholder="Mobile Number"
            />
            {errors.mobile_number && <p className="invalid-field">{errors.mobile_number.message}</p>}
        </div>
    {/* Password field */}
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

      {/* Confirm Password */}
        <div className="form-field mt-3 mb-2">
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            placeholder="Confirm Password"
            className="form-control"
          />
          {errors.confirmPassword && <p className="invalid-field">{errors.confirmPassword.message}</p>}
        </div>

      <button type="submit" className="btn primary-bg w-100 my-3 mb-2">Sign Up</button>
    </form>
    <div className="mx-auto mb-3 text-secondary  w-100 text-center">Already have an account? <span className="primary-link" onClick={() => formActiveHandler('Login')}> Sign In</span></div>
    </>
  )
}

export default RegisterForm