import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-6 text-primary text-center">
      <span className="text-sm font-medium">
        © {new Date().getFullYear()} Mindly. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer