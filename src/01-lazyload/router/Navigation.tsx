import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages'

const Navigation = () => { 

  return (
    <>
      <h2>LazyLayout Pages</h2>
      <nav style={{display: 'grid'}}>
        <Link to="lazy1">Lazy Page 1</Link>
        <Link to="lazy2">Lazy Page 2</Link>
        <Link to="lazy3">Lazy Page 3</Link>
      </nav>

      <Routes>
        {/* <Route index element={ <LazyPage1 /> } /> */}
        <Route path="lazy1" element={ <LazyPage1 /> } />
        <Route path="lazy2" element={ <LazyPage2 /> } />
        <Route path="lazy3" element={ <LazyPage3 /> } />
        <Route path="*" element={<Navigate to="lazy1" />} />
      </Routes>
    </>
  )

}

export default Navigation
