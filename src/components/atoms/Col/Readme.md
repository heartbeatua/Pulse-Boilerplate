Root element of grid. Required. You can <a target="_blank" href="https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md">
see more</a> about responsivity. Required.

```js
<Container>
  <Row>
    <Col width={[1, 1/2, 1/4]}><p style={{background: '#eaeaea'}}>column</p></Col>
    <Col width={[1, 1/2, 1/4]}><p style={{background: '#eaeaea'}}>column</p></Col>
    <Col width={[1, 1/2, 1/4]}><p style={{background: '#eaeaea'}}>column</p></Col>
    <Col width={[1, 1/2, 1/4]}><p style={{background: '#eaeaea'}}>column</p></Col>
    <Col width={[1, 'auto']}><p style={{background: '#eaeaea'}}>column</p></Col>
    <Col width={[1, 'auto']}><p style={{background: '#eaeaea'}}>column</p></Col>
  </Row>
</Container>
```
