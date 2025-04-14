
import BlogsList from './BlogsList'
import useFetch from '../CustomHooks/useFetch'
import { Link } from 'react-router-dom';

const Home = () => {
 
  const {Customdata:blogs,loading}=useFetch("http://localhost:3002/blogs")
  

  return (
    <div className='home'>
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
  
      {!loading && blogs && <BlogsList blogs={blogs} />}

      <Link to={'/create'}><h1>Create a new blog</h1></Link> 
    </div>
  );
  
}

export default Home 