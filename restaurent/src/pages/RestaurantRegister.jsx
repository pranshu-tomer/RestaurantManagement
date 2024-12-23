import React, { useState } from 'react';
import { Upload,LoaderCircle } from 'lucide-react';
import apiRestaurantSignUp from '../../globalApi';

export default function RestaurantRegister() {
  const [isLoading,setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    homeDelivery: false,
    image: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('password', formData.password);
    form.append('description', formData.description);
    form.append('email', formData.email);
    form.append('address', formData.address);
    form.append('phone', formData.phone);
    form.append('homeDelivery', formData.homeDelivery);
    if (formData.image) {
      form.append('image', formData.image);
    }

    setIsLoading(true)
    const response = await apiRestaurantSignUp(form)

    response.json()
    .then((data) => {
      if(data.success){
        console.log("Everything is Fine :",data)
      }else{
        console.log("Error Occurs : ",data)
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
        <h2 className="text-2xl font-bold text-center mb-8">Register Your Restaurant</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div class="px-5 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Restaurant Name</label>
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
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
            <textarea
              class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Tell us more about you restaurant"
              type="text"
              id="description"
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div class="px-5 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
            <input
              class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Where we can get our meal"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className='pt-5 flex justify-center items-center gap-[10px]'>
              <h3>Home Delivery</h3>
              <label class="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  value={formData.homeDelivery}
                  onChange={(e) => setFormData({...formData, homeDelivery: e.target.value})}
                  class="sr-only peer"
                  required
                />
                <div class="group peer ring-0  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-500  rounded-full outline-none duration-1000 after:duration-300 w-12 h-6  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5   peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">
                </div>
              </label>
            </div>
          </div>

          <div className='px-5'>
            <div class="container">
              <div class="folder">
                <div class="top"></div>
                <div class="bottom"></div>
              </div>
              <label class="custom-file-upload">
                <input class="title" type="file" accept="image/*" onChange={handleImageChange}/>
                Choose a file
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {(isLoading)?<LoaderCircle className='animate-spin'/>:"Register Restaurant"}
          </button>
        </form>
      </div>
    </div>
  );
}