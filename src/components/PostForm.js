import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost, hideAlert, showAlert } from '../redux/actions'
import Alert from './Alert'

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
    if (!title.trim()) {
      this.props.showAlert('Введите текст')
      return
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    }
    this.setState({ title: '' })
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
        {this.props.message && <Alert message={this.props.message} />}
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
  showAlert,
  hideAlert,
}

const mapStateToProps = (state) => {
  return {
    message: state.app.alert,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
