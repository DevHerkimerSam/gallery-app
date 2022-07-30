import Card from "react-bootstrap/Card"


export function ItemCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{props.item.title}</Card.Title>
    </Card.Body>
  </Card>
  )
}