import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

const SignUp = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="border border-secondary rounded-md p-8 w-full max-w-sm flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-primary text-center mb-2">Sign Up to Mindly</h2>
        
        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors cursor-pointer">
          <FaGoogle size={20} />
          <span>Continue with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-secondary transition-colors cursor-pointer">
          <FaGithub size={20} />
          <span>Continue with GitHub</span>
        </button>

        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-primary/30" />
          <span className="text-xs text-primary/60">or</span>
          <div className="flex-1 h-px bg-primary/30" />
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-5 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 placeholder:text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 placeholder:text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 placeholder:text-sm focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp