import PropTypes from "prop-types";

function ListItem({ liste, icon }) {
  function line(e) {
    let decoration = e.target.style.textDecoration;
    decoration == ""
      ? (e.target.style.textDecoration = "line-through",e.target.style.color = "red")
      : (e.target.style.textDecoration = "" , e.target.style.color = "black");
  }
  return (
    <div className="list" >
      <ul>
        {liste.map((liste) => (
          <li onClick={line} key={liste.i}>
            {liste}
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
  liste: PropTypes.node,
  icon: PropTypes.node,
};
export default ListItem;
