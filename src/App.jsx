import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import SpecialSessions from './pages/SpecialSessions'
import Speakers from './pages/Speakers'
import Committees from './pages/Committees'
import Venue from './pages/Venue'
import Schedule from './pages/Schedule'
import Registration from './pages/Registration'
import Submission from './pages/Submission'
import Contact from './pages/Contact'
import StarProject from './pages/StarProject'
import SustainAThon from './pages/SustainAThon'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/call-for-paper" element={<CallForPapers />} />
      <Route path="/special-session" element={<SpecialSessions />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/committees" element={<Committees />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/star-project" element={<StarProject />} />
      <Route path="/sustain-a-thon" element={<SustainAThon />} />
      <Route
        path="*"
        element={
          <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-display text-3xl font-bold text-navy-900">Page not found</h1>
            <a href="/" className="text-accent-600 hover:underline">
              Return home
            </a>
          </div>
        }
      />
    </Routes>
  )
}
