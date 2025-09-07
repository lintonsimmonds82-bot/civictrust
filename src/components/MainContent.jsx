import React, { useState } from 'react'

const MainContent = ({ account }) => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Community Park Renovation",
      description: "Proposal to renovate the central community park with new playground equipment and walking trails.",
      votes: 42,
      status: "Active"
    },
    {
      id: 2,
      title: "Street Light Installation",
      description: "Install LED street lights on Oak Street for improved safety.",
      votes: 28,
      status: "Active"
    }
  ])

  const vote = (proposalId) => {
    setProposals(proposals.map(p => 
      p.id === proposalId ? { ...p, votes: p.votes + 1 } : p
    ))
  }

  return (
    <div className="card">
      <h2>Civic Proposals</h2>
      <p>Your voice matters in local governance</p>
      
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        {proposals.map(proposal => (
          <div key={proposal.id} style={{ 
            border: '1px solid #ccc', 
            padding: '1rem', 
            margin: '1rem 0',
            borderRadius: '8px'
          }}>
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Votes: {proposal.votes}</span>
              <button onClick={() => vote(proposal.id)}>
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Your Impact</h3>
        <p>Connected as: {account}</p>
        <p>You can vote on proposals and participate in local governance decisions.</p>
      </div>
    </div>
  )
}

export default MainContent