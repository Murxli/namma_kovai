import React from 'react'
import { Input } from "@/components/ui/input"

const SearchBar = () => {
  return (
    <Input type="text" placeholder="Ref No" 
      className="max-w-md w-full focus:!outline-none focus:ring-0  focus:ring-offset-0 focus:border-white focus:ring-transparent focus:bg-teal-50"/>
  )
}

export default SearchBar