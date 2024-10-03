function Item(props) {
  return (
    <li><a href={props.link}>{props.content}</a></li>
  )
}

function Menu({ list }) {
  return (
    <ul>
      {list.map((v) => (
        <Item link={v.url} content={v.text} />
      ))}
    </ul>
  )
}

function Header() {
  const list = [
    {
      url: "//facebook.com",
      text: "FB",
    },
    {
      url: "//youtube.com",
      text: "YT",
    }
  ]
  return (
    <Menu list={list} />
  )
}

export {Header}