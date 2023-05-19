import React, { useState,} from "react";

const Contact = () => {
  const initialValue={name:"",email:"",message:""}
  const [initialFormValue,setinitialFormValue]=useState(initialValue);
  const [formErrors,setFormErrors]=useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = (e) => {
      const {name , value } =e.target;
      setinitialFormValue({...initialFormValue, [name]:value});
      
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(initialFormValue))
    setIsSubmit(true);
   }
  //  useEffect (() =>{
   
  //  if(Object.keys(formErrors).length === 0 && isSubmit){

  //  }
  //  },[formErrors])

   const validate =(values) => {
       const errors={};
     
       const pattern= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

       if(!values.name){
        errors.name = "Name is required!"
       }
       if(!values.email){
        errors.name = "email is required!"
       } else if (! pattern.test(values.email)){
        errors.email ="This is not a valid email format"
       }
       if(!values.message){
        errors.name = "something write why do you contact me !"
       }
       return errors;
   }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      
      
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
         
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Thank you for contact me</div>
      ) : (
       <p></p>
      )}

        <div className=" flex justify-center items-center">
          <form
           onSubmit={handleSubmit}
            action="https://getform.io/f/ebdcf5a0-6f56-4576-b0bf-7a0ec10ae142"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <p className="text-red-800 font-bold">{formErrors.name}</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={initialFormValue.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <p className="text-red-800 font-bold">{formErrors.email}</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={initialFormValue.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
           <p className="text-red-800 font-bold">{formErrors.message}</p>
       
            <textarea
              name="message"
              placeholder="Enter your message"
              value={initialFormValue.message}
              onChange={handleChange}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
    
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
