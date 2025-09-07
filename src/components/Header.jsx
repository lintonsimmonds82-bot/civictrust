import React from 'react'

const Header = ({ account, isConnected }) => {
  return (
    <header className="App-header">
      <h1>🏛️ CivicTrust</h1>
      <p>Decentralized Platform for Civic Transparency</p>
      {isConnected && (
        <div>
          <p>Connected: {account?.slice(0, 6)}...{account?.slice(-4)}</p>
        </div>
      )}
    </header>
  )
}

export default Header