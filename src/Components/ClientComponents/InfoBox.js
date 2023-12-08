import React from 'react'
import { useClientContext } from '../../Contexts/ClientContext';

export default function InfoBox() {

    const { state } = useClientContext();

  return (
    <div className="mt-16 ml-[10%]">
        <div className="my-4">Name: </div>
        <div className="my-4">Email: {state.currentClientUser.email}</div>
        <div className="my-4">username: {state.currentClientUser.username}</div>
    </div>
  )
}
