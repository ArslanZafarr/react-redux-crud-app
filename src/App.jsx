import './App.css'
import PostsList from '../src/components/PostsList/PostsList'
import AddPostForm from './components/AddPostForm/AddPostForm'
function App() {

  return (
    <>
      <div className='container'>

        <AddPostForm />

        <PostsList />
      </div>

    </>

  )
}

export default App
