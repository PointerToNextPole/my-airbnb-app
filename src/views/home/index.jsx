import React, { memo, useEffect, useState } from "react";
import request from "@/services";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    request.get({ url : '/home/highscore' }).then(res => {
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      Home
    </div>
  )
})

export default Home