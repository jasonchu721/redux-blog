import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { name: "", body: "", };

  componentDidMount() {
    if (this.props.blog) {
      const { name, body, } = this.props.blog
      this.setState({ name, body, })
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
  
    // const { name, body, } = this.state;

      e.preventDefault();
    const { name, body, } = this.state;
    const { dispatch, id, } = this.props
    const blog = { name, body, id, };
    dispatch({ type: "ADD_BLOG", blog });
    dispatch({ type: "INC_ID" });
    this.setState({ name: "", body: "", })
    // this.props.history.push(`/blogs`);
  }
  //   e.preventDefault();
  //   if (this.props.post) {
  //     const { dispatch, toggleEdit } = this.props;
  //     const { id } = this.props.blog
  //     const blog = { name, body, id };
  //     dispatch({ type: 'UPDATE_BLOG', blog, })
  //     toggleEdit()
  //   } 
  //   else {
  //     const { dispatch, id } = this.props;
  //     const blog = { name, body, id };
  //     dispatch({ type: 'ADD_Blog', blog });
  //     dispatch({ type: 'INC_ID', })
  //     this.setState({ name: "", body: "", })
  //   }
  // }

  render() {

    const { name, body,  } = this.state;

    return (
      <div>
        <br />
        <h3> Blog Entry </h3>
        <Form onSubmit={this.handleSubmit}>
        <hr />
          <input
            name='name'
            autoFocus
            value={name}
            placeholder="Name"
            title="Blog"
            onChange={this.handleChange} />
            </Form>
            <br />
        <Form onSubmit={this.handleSubmit}>
          <input
            name='body'
            value={body}
            placeholder="Body"
            title="Body"
            onChange={this.handleChange} />
        </Form>
        <br />
          <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);