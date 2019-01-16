```jsx
<Table bordered striped>
  <Thead>
    <Tr>
      <Th>#</Th>
      <Th>First</Th>
      <Th>Last</Th>
      <Th>Position</Th>
    </Tr>
  </Thead>
  <tbody>
    <Tr>
      <Th scope='row'>1</Th>
      <Td>Bruce</Td>
      <Td>Wayne</Td>
      <Td>CEO</Td>
    </Tr>
    <Tr>
      <Th scope='row'>2</Th>
      <Td>Clark</Td>
      <Td>Kent</Td>
      <Td>Clerk</Td>
    </Tr>
    <Tr>
      <Th scope='row'>3</Th>
      <Td colSpan='2'>Diana Prince</Td>
      <Td>Archeologist</Td>
    </Tr>
  </tbody>
</Table>
```

```jsx
<Table bordered striped hoverable dark width='60vw'>
  <Thead>
    <Tr>
      <Th dark>#</Th>
      <Th dark>First</Th>
      <Th dark>Last</Th>
      <Th dark>Position</Th>
    </Tr>
  </Thead>
  <tbody>
    <Tr>
      <Th dark scope='row'>1</Th>
      <Td>Bruce</Td>
      <Td>Wayne</Td>
      <Td>CEO</Td>
    </Tr>
    <Tr>
      <Th dark scope='row'>2</Th>
      <Td>Clark</Td>
      <Td>Kent</Td>
      <Td>Clerk</Td>
    </Tr>
    <Tr>
      <Th dark scope='row'>3</Th>
      <Td colSpan='2'>Diana Prince</Td>
      <Td>Archeologist</Td>
    </Tr>
  </tbody>
</Table>
```

```jsx
 <div className='overflow-scroll' style={{width: '400px', height: '200px'}}>
  <Table bordered striped hoverable dark>
    <Thead sticky>
      <Tr>
        <Th dark sticky stickyTop>#</Th>
        <Th dark stickyTop>First</Th>
        <Th dark stickyTop>Last</Th>
        <Th dark stickyTop>Occupation</Th>
        <Th dark stickyTop>Other</Th>
        <Th dark stickyTop>Location</Th>
        <Th dark stickyTop>Details</Th>
        <Th dark stickyTop>Language</Th>
      </Tr>
    </Thead>
    <tbody>
      <Tr>
        <Th dark scope='row' sticky>1</Th>
        <Td>Bruce</Td>
        <Td>Wayne</Td>
        <Td>CEO</Td>
      </Tr>
      <Tr>
        <Th dark scope='row' sticky>2</Th>
        <Td>Clark</Td>
        <Td>Kent</Td>
        <Td>Clerk</Td>
      </Tr>
      <Tr>
        <Th dark scope='row' sticky>3</Th>
        <Td>Diana</Td>
        <Td>Prince</Td>
        <Td>Archeologist</Td>
      </Tr>
       <Tr>
        <Th dark scope='row' sticky>4</Th>
        <Td>Barry</Td>
        <Td>Allen</Td>
        <Td>Analyst</Td>
      </Tr>
    </tbody>
  </Table>
</div>
```