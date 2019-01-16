Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing. These aren't yet responsive.

```jsx
<CardGroup width="80%">
  <CardGroup.Card>
    <Card.Image src='src/img/template.png' />
    <Card.Body>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/>
        <small>12:40 PM - 1 Mar 2018</small>
      </Card.Text>
    </Card.Body>
  </CardGroup.Card>
  <CardGroup.Card>
    <Card.Image src='src/img/template.png' />
    <Card.Body>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/>
        <small>12:40 PM - 1 Mar 2018</small>
      </Card.Text>
    </Card.Body>
  </CardGroup.Card>
  <CardGroup.Card>
    <Card.Image src='src/img/template.png' />
    <Card.Body>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/>
        <small>12:40 PM - 1 Mar 2018</small>
      </Card.Text>
    </Card.Body>
  </CardGroup.Card>
</CardGroup>
```