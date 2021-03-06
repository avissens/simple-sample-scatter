import React, { Component } from 'react';
import styled from '@emotion/styled'

const Form = styled.form`
width: 100%;
padding: 20px;
`
class URLForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.default};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <label>
          URL:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default URLForm;