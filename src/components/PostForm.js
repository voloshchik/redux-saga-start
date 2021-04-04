import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }
  submitHandler = (event) => {
    event.preventDefault()
    const { title } = this.state
    const newPost = {
      title,
      id: Date.now().toString(),
    }

    console.log(newPost)
    this.props.createPost(newPost)
  }

  changeInputHandler = (event) => {
    event.persist()
    this.setState((prev) => ({ ...prev, ...{ [event.target.name]: event.target.value } }))
    console.log(this.state.title)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Форма поста
          </label>
          <input
            value={this.state.title}
            onChange={this.changeInputHandler}
            type='text'
            className='form-control'
            id='title'
            name='title'
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Создать пост
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost,
}

export default connect(null, mapDispatchToProps)(PostForm)
