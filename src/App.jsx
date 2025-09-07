import { useState, useEffect } from 'react'
import WalletConnect from './components/WalletConnect'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [account, setAccount] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Check if wallet is already connected
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setAccount(accounts[0])
            setIsConnected(true)
          }
        })
        .catch(console.error)
    }
  }, [])

  return (
    <div className="App">
      <Header account={account} isConnected={isConnected} />
      <main>
        {!isConnected ? (
          <WalletConnect 
            setAccount={setAccount} 
            setIsConnected={setIsConnected} 
          />
        ) : (
          <MainContent account={account} />
        )}
      </main>
    </div>
  )
}

export default App