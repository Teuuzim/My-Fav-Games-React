export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.href}>
        <img src={props.img} alt={props.alt} />
      </a>
    </li>
  );
}
