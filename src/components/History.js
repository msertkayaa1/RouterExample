import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function History() {
  return (
    <>
    <div>
      History
    </div>
    <nav>
    <Link to="company">Oursadsadsadsa</Link>
    <Link to="team">Teamm</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default History
