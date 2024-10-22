import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SuperheroesPage from './components/Superheroes.page'
import RQSuperheroesPage from './components/RQSuperheroes.page'
import HomePage from './components/Home.page'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from '../node_modules/react-query/es/core/queryClient';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}> 
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/super-heroes' >Traditional superheroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes' >RQ Superheroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/super-heroes' element={<SuperheroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperheroesPage />} />
        </Routes>
      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App
