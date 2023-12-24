import React, {useState} from "react";

const Contact = () => {

  const [input, setInput] = useState({email: ""});
  const [errors, setErrors] = useState({email: ""});

  const validate = (state) => {
    const errors = {};
    
    const patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
       
    if (state.email && !patronEmail.test(state.email)) errors.email = 'Enter an email address please'
    
    return errors;
}

const handleChange = (event) => {
  setInput({
    ...input,
    [event.target.name]: event.target.value,
  });
  setErrors(
    validate({
      ...input,
      [event.target.name]: event.target.value,
    })
  );
};

  return (
    <div id= "contact" className=" w-screen flex items-center flex-col pt-[5%]">
      <h2 className="font-semibold text-[40px]">Contact</h2>
      <form
        action="https://getform.io/f/2261747c-69b5-456a-b5e8-1d7aed9f024f"
        method="POST"
        className="flex flex-col items-center justify-center pt-10 pb-20"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded border border-slate-800 mt-6 p-1 w-[800px] 2xl:h-[40px] sm:w-[300px]  bg-slate-200"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="rounded border border-slate-800 mt-6 p-1 w-[800px] 2xl:h-[40px] sm:w-[300px]  bg-slate-200"
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          id=""
          resize="none"
          className="rounded border border-slate-800 mt-6 p-1  w-[800px] 2xl:h-[200px] sm:w-[300px]  bg-slate-200"
        ></textarea>
        <button
          type="submit"
          className="rounded border border-slate-800 mt-8 2xl:w-[160px] sm:w-[120px] p-2 bg-[#2B2B29] text-white text-[20px] duration-300 hover:bg-slate-400"
        >
          Send
        </button>
      </form>
      
    </div>
  );
};

export default Contact;
