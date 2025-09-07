import React from 'react'

const WalletConnect = ({ setAccount, setIsConnected }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setAccount(accounts[0])
        setIsConnected(true)
      } catch (error) {
        console.error('Error connecting wallet:', error)
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet!')
    }
  }

  return (
    <div className="card">
      <h2>Welcome to CivicTrust</h2>
      <p>Connect your wallet to participate in civic transparency</p>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
      {!window.ethereum && (
        <p style={{ color: 'orange' }}>
          No Web3 wallet detected. Please install MetaMask.
        </p>
      )}
    </div>
  )
}

export default WalletConnect