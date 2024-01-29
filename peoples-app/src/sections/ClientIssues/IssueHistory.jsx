import { useAuth } from '@/context/AuthContext'
import useFetch from '@/hook/useFetch'
import React from 'react'

const IssueHistory = () => {
  const authData = useAuth();
  if(authData.userData._id){
    const userIssues = useFetch(`http://localhost:3001/issues/?userId=${authData.userData._id}`)
    console.log(userIssues);
  }
  return (
    <div>
      <h2>Your Complaint History</h2>
      <section>
        
      </section>
    </div>
  )
}

export default IssueHistory