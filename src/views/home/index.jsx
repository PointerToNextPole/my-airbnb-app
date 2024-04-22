import React, { memo, useEffect, useState } from "react";
import request from "@/services";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    request.get({ url : '/home/highScore' }).then(res => {
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{ highScore.title }</h2>
      <h4>{ highScore.subtitle }</h4>
      <ul>
        {
          highScore.list?.map(h => (<li key={ h.id }>{ h.name }</li>))
        }
      </ul>
    </div>
  )
})

export default Home