function Hellooooooooo() {
  const hiAll = () => {
    alert("hello everyone")
  }
  const hiYou = (name) => {
    alert("Hello " + name)
  }

  return (
    <span>
      <button onClick={hiAll}>Hi All</button>
      <button onClick={() => hiYou("Vinh")}>Hi you</button>
    </span>
  )
}

export {
  Hellooooooooo
}