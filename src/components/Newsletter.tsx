import React, { useState } from 'react';
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
    // You could add toast notification here
  };
  return <section className="py-16 bg-montys-green text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <img alt="Monty's Larder" className="h-16 mx-auto" src="https://cdn-icons-png.flaticon.com/512/91/91534.png" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sign up to our newsletter</h2>
          <p className="mb-8">
            Sign up to receive offers & discounts and to learn more about Monty's Larder
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row max-w-md mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email*" required className="flex-grow mb-3 md:mb-0 md:mr-2 px-4 py-2 rounded-md text-black" />
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>;
};
export default Newsletter;