import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { supabase } from '@/lib/supabaseClient'
import toast from 'react-hot-toast'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        toast('You are already logged in!', { icon: 'ℹ️' })
        router.replace('/')
      }
    }
    checkUser()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.email || !form.password) {
      toast.error('Please fill in all fields.')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })
    setLoading(false)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Login successful!')
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-between bg-background mr-36">
      <div className='w-full h-[80vh] bg-cover bg-secondary rounded-lg flex flex-col items-center justify-center'>
        <h1 className='text-8xl italic font-extrabold text-primary'>Mindly</h1>
        <p className='pt-4 pl-12 italic text-gray-400 font-medium'>Your AI friend, assistant and companion.</p>
      </div>
      <div className="p-8 w-full max-w-sm flex flex-col gap-6 ml-36">
        <h2 className="text-2xl font-bold text-primary text-center mb-2">Login to Mindly</h2>

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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-5 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 placeholder:text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="px-5 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 placeholder:text-sm focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <a href="/signup" className="text-sm text-center text-primary hover:underline">Don't have an account? Sign up</a>
      </div>
    </div>
  )
}

Login.noLayout = true;
export default Login