The color swatches from the cf-brand-book are as follows:

```jsx
<div>
    <Input email id='female' label='Email Address' />
    <Input email id='female1' placeholder='Email Address' />
    <Input password id='pword' placeholder='Password' />
    <Input text id='pword2' label='Address' placeholder='Bludhaven, Gotham' helpText='Enter your address'/>
    <Input textarea id='textarea' placeholder='A paragraph of text' label='Text Area'/>
</div>
```

```jsx
<form>
  <Row>
    <Col size={7}>
      <Input placeholder="City"/>
    </Col>
    <Col>
      <Input placeholder="State"/>
    </Col>
    <Col>
      <Input placeholder="Zip"/>
    </Col>
  </Row>
</form>
```

```jsx
<div>
    <Input email valid id='email' label='Email Address' />
    <Input email invalid id='email1' placeholder='Email Address' />
    <Input email disabled id='email2' label='Email Address' placeholder='Email Address' />
</div>
```
