
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import MyFiles from './pages/MyFiles'
import Subscription from './pages/Subscription'
import Transactions from './pages/Transactions'
import PublicFileview from './pages/PublicFileview'
import './App.css'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
        <Route path="/upload" element={
           <>
            <SignedIn>
              <Upload />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
        <Route path="/my-files" element={
          <>
            <SignedIn>
              <MyFiles />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
        <Route path="/subscriptions" element={
          <>
            <SignedIn>
              <Subscription />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
        <Route path="/transactions" element={
          <>
            <SignedIn>
              <Transactions />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
        <Route path="/public-fileview" element={<PublicFileview />} />
        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
