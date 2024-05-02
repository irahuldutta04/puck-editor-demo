import React from 'react'
import { MainPage } from './HomePage'
import { useParams, useNavigate } from "react-router-dom";

const PreviewSite = () => {
    const data = JSON.parse(localStorage.getItem('content'))

    const navigate = useNavigate()

  return (
    <div>
          <button onClick={() => navigate('/editor')}>Back to Edit</button>
        <MainPage data={data} />
    </div>
  )
}

export default PreviewSite