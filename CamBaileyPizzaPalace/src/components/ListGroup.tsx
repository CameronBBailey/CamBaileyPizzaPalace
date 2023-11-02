
import { Fragment } from "react";


function ListGroup() {
    const items = [
        'PIZZA PIE',
        'YUMMY YUMMY CHICKEN WINGS',
        'coleslaw......',
        'STEAK N CHEESE OH BOI',
        'POTATO WEDGES'
    ];

    {items.map(item => <li>{item}</li>)}
    return (
        <Fragment>
            <h1>List</h1>
    <ul className="list-group">
        {items.map(item => <li  key={item}>{item}</li>)}
  </ul>
        </Fragment>
  );
}

export default ListGroup