import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  
  
    const [Customdata , setCustomdata]=useState(null)
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setCustomdata(data);
          setLoading(false); // ✅ stop loading
        } catch (error) {
          console.error("Error fetching blogs:", error);
          setLoading(false);
        }
      };
    
      fetchBlogs();
    }, [url]);

    return {Customdata,loading}
}

export default useFetch