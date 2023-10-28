import React from 'react'
import { useContractorContext } from '../../Contexts/ContractorContext'

export default function ContractorProfilePage() {

  const { state } = useContractorContext();

  return (
    <div>
      <h1>Contractor Profile Page</h1>
      <p>Name: {state.currentContractorUser.username}</p>
      <p>Email: {state.currentContractorUser.email}</p>
    </div>
  )
}
