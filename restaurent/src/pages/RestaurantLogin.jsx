import React, { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import Popup from '../components/Popup';

export default function RestaurantLogin() {
  const [isLoading,setIsLoading] = useState(false)
  const [showPopup,setShowPopup] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('password', formData.password);
    form.append('email', formData.email);

    setIsLoading(true)
    // const response = await apiSignUp(form)

    // response.json()
    // .then((data) => {
    //   if(data.success){
    //     console.log("Everything is Fine :",data)
    //   }else{
    //     console.log("Error Occurs : ",data)
    //   }
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
    setIsLoading(false)

    // if (response.ok) {
    //   // toast.dismiss(2345)
    //   // toast.success(`Login Successful`,{
    //   //   duration: 2000,
    //   //   style: {
    //   //     color: 'green',
    //   //   }
    //   // })
    //   // navigate('/')
    //   const data = await response.json()
    //   console.log(data)
    // } else {
    //   // toast.dismiss(2345)
    //   // toast.error(`${response.statusText}`, {
    //   //   duration: 2000,
    //   //   style: {
    //   //     color: 'red',
    //   //   }
    //   // })
    //   console.log("Something is wrong")
    // }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Login to Your Restaurant</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="px-5 bg-white rounded-lg font-mono">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="xyz@gmail.com"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                />
            </div>
            <div className="px-5 bg-white rounded-lg font-mono">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="******"
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                />
            </div>


            <div className='flex justify-between px-5 text-indigo-600'>
                <a href="/">Forgot Password</a>
                <button type='button' onClick={() => {setShowPopup(true)}}>Don't Have Account!</button>
            </div>

            <button
                type="submit"
                className="flex justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {(isLoading)?<LoaderCircle className='animate-spin'/>:"Login"}
            </button>
        </form>
      </div>
    </div>
    {showPopup ?
        <Popup onClose={() => setShowPopup(false)}/>
    :
        null
    }
    
    </>
  );
}