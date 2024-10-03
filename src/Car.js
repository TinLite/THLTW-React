import { useState } from "react"

function Car() {
  const [car, setCar] = useState({name: "Asus", color: "Cat", year: "2077"})
  const [inp, setInp] = useState("")
  return (
    <>
      Show information of Car: {JSON.stringify(car)}<br/>
      Update Year of Car: <input type="number" value={inp} onInput={(e) => {
        setInp(e.currentTarget.value)
      }} />
      <input type="button" value="Update Year" onClick={() => {

        setCar({...car, year: inp});
        setInp("")
      }} />
    </>
  )
}

export {
  Car
}