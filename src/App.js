import { FethedPosts } from './components/FethedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

function App() {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Синхронный посты</h2>
          <Posts posts={[]} />
        </div>
        <div className='col'>
          <h2>Асинхронный посты</h2>
          <FethedPosts posts={[]} />
        </div>
      </div>
    </div>
  )
}

export default App
