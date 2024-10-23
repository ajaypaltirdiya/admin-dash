import { useForm } from "react-hook-form";

const UserManagementForm = ({setFormData}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setFormData(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="form-field col-sm-9">
                    <input
                        type="text"
                        placeholder="Enter first name"
                        className="form-control"
                        {...register('firstName', { required: 'First Name is required' })}
                    />
                    {errors.firstName && <p className="invalid-field">{errors.firstName.message}</p>}
                </div>
            </div>

            {/* Last Name */}
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Last Name</label>
                <div className="form-field col-sm-9">
                    <input
                        type="text"
                        placeholder="Enter last name"
                        className="form-control"
                        {...register('lastName', { required: 'Last Name is required' })}
                    />
                    {errors.lastName && <p className="invalid-field">{errors.lastName.message}</p>}
                </div>
            </div>

            {/* Email */}
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email (Login ID)</label>
                <div className="form-field col-sm-9">
                    <input
                        type="email"
                        placeholder="Enter email id"
                        className="form-control"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                        })}
                    />
                    {errors.email && <p className="invalid-field">{errors.email.message}</p>}
                </div>
            </div>

            {/* Phone Number */}
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Phone Number</label>
                <div className="form-field col-sm-9">
                    <div className="row">
                        <div className="col-2">
                            <select className="form-control" {...register('countryCode', { required: 'Country code is required' })}>
                                <option value="+91">+91</option>
                                <option value="71">71</option>
                                <option value="81">81</option>
                            </select>
                            {errors.countryCode && <p className="invalid-field">{errors.countryCode.message}</p>}
                        </div>
                        <div className="col-10">
                            <input
                                type="text"
                                placeholder="Mobile number"
                                className="form-control"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' },
                                })}
                            />
                            {errors.phone && <p className="invalid-field">{errors.phone.message}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Profile</label>
                <div className="form-field col-sm-9">
                    <select
                        className="form-control"
                        {...register('profile', { required: 'Profile selection is required' })}
                    >
                        <option value="">Select Profile</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>
                    {errors.profile && <p className="invalid-field">{errors.profile.message}</p>}
                </div>
            </div>

            {/* Status */}
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Status</label>
                <div className="form-field col-sm-9">
                    <label className="switch" htmlFor="toggleCheckbox">
                        <input
                            type="checkbox"
                            id="toggleCheckbox"
                            {...register('status')}
                        />
                        <div className="slider round"></div>
                    </label>
                </div>
            </div>



            <button type="submit" className="btn primary-bg my-3 mb-2">Submit</button>

        </form>
    )
}

export default UserManagementForm