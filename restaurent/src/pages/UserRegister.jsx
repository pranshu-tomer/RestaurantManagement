import React, { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import apiUserSignUp from '../../globalApi'

export default function UserRegister() {
  const [isLoading,setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('password', formData.password);
    form.append('email', formData.email);
    form.append('address', formData.address);
    form.append('phone', formData.phone);

    setIsLoading(true)
    const response = await apiUserSignUp(form)

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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Register YourSelf</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div class="px-5 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">FullName</label>
            <input
              class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Enter text here"
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div class="px-5 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
            <input
              class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Where we can get your meal"
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="px-5 bg-white rounded-lg font-mono">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone</label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="90XXXXXX21"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div class="px-5 bg-white rounded-lg font-mono">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="xyz@gmail.com"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

            <div class="px-5 bg-white rounded-lg font-mono">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="******"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

          <button
            type="submit"
            className="flex justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {(isLoading)?<LoaderCircle className='animate-spin'/>:"Register"}
          </button>
        </form>
      </div>
    </div>
  );
}