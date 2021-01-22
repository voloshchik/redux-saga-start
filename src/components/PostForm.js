import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  submitHandler = (event) => {
    event.preventHadler()
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='mb-3'>
          <label for='title' className='form-label'>
            Форма поста
          </label>
          <input type='text' class='form-control' id='title' />
        </div>
        <button type='submit' className='btn btn-success'>
          Создать пост
        </button>
      </form>
    )
  }
}
