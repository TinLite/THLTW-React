function Hello() {
  const person = {
    name: 'Peter',
    theme: {
      backgroundColor: 'green',
      color: 'white'
    }
  };
  return (
    <div>
      <div style={person.theme}>
        <h1>Xin chào: {person.name}</h1>
      </div>
      <div> Chúc bạn thành công với React</div>
    </div>
  )
}

function HelloPerson(props) {
  return (
    <h1>Xin chào bạn: {props.name}</h1>
  )
}

export {
  Hello,
  HelloPerson
};