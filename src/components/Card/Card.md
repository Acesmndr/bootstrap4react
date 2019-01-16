It's a material design card with multiple components that you can use.

```jsx
<Card width='20%'>
  <Card.Image src='src/img/template.png' />
  <Card.Body>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br/>
      <small>12:40 PM - 1 Mar 2018</small>
    </Card.Text>
  </Card.Body>
</Card>
<Card width='20%' success>
  <Card.Header>
    Hello
  </Card.Header>
  <Card.Body>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br/>
      <small>12:40 PM - 1 Mar 2018</small>
    </Card.Text>
  </Card.Body>
</Card>
```

```jsx
<Card>
  <Card.Body>
    <Card.Title>
      "Less is more. #minimalism #design"
    </Card.Title>
  </Card.Body>
  <Card.Footer muted>
      View on <a href="https://twitter.com/xsmndr/status/858333356244824064">Twitter</a>
  </Card.Footer>
</Card>
```