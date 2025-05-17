import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface LoginProps {
  onSubmit: (values: { username: string; password: string }) => void;
  onCreateAccount: () => void;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(6, 'Username must be at least 5 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required')
});

const Login: React.FC<LoginProps> = ({ onSubmit, onCreateAccount }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 mb-4">
            <img src="/assets/profile.png" alt="Lotus Logo" className="w-full" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">We are Developers</h1>
          <p className="text-gray-600 mt-2">Please login to your account</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Chandra"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Chandra@123"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              LOG IN
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-gray-600 hover:text-pink-500">Forgot password?</a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button className="text-pink-500 hover:text-pink-600" onClick={onCreateAccount}>
              CREATE NEW
            </button>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 p-12">
        <div className="text-white">
         <h2 className="text-4xl font-bold mb-4">Welcome!  </h2>
         <h2 className="text-2xl font-bold mb-4">I’m Chandra Prakash</h2>
         <h2 className="text-2xl font-bold mb-4">MERN Stack Developer</h2>
<p className="text-lg">
  As a passionate developer, I don’t just build solutions — I create experiences. This platform reflects my dedication to innovation, performance, and reliability. My goal is to make technology work for you in the most seamless and secure way possible, ensuring every interaction adds real value to your journey.
</p>

        </div>
      </div>
    </div>
  );
};

export default Login;
