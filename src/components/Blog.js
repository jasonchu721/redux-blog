import React from 'react';
import { connect, } from 'react-redux';
import { Button, Segment, List } from 'semantic-ui-react';
import BlogForm from './BlogForm';

  class Blog extends React.Component {
    state = { toggleEdit: false }
  
    toggleEdit = () => this.setState({ toggleEdit: !this.state.toggleEdit})
  
    render() {
      const { toggleEdit } = this.state
      const { name, body, id, dispatch } = this.props

    return (
      <List.Item>
        {
          toggleEdit ?
          <BlogForm id={id} toggleEdit={this.toggleEdit} post={{...this.props}}/>
          :
      <div >
        <Segment>
          Blog Entry Title: {name}
          <br />
          <br />
          {body}
          <Button 
            floated="right"
            size="tiny"
            content="Delete Blog"
            color="red"
            onClick={() => dispatch({ type: 'DELETE_BLOG', id})}
            />
          <Button
            floated="right"
            size="tiny"
            content="Edit Blog"
            color="green"
            onClick={this.toggleEdit}
          />
        </Segment>
        <br />
      </div>
        }
        </List.Item>
    )
  }}

export default connect()(Blog);