import { CardGroup } from "react-bootstrap";
import {items} from "./data/items"
import { ItemCard } from "./components/item-card"
function App() {
  return (
    <div>
     <h1>Gallery</h1>
     <CardGroup>
       {items.map((item) => (<ItemCard item = {item} />))}
     </CardGroup>
    </div>
  );
}

export default App;
