import { useState, useEffect } from "react"
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch"


export default function App() {
  const[images, setImages] = useState([]) //image object
  const[isLoading, setIsLoading] = useState(true) //loading status
  const[term, setTerm] = useState('') //search term

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res=> res.json())
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false);
    })
    .catch(err=> console.log(err))
  }, [term]) //re-run when term changes
  
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text)=> setTerm(text)} /> {/*catches submitted form inputs and set search term*/}
      {!isLoading && images.length === 0  && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4 my-5">
        {images.map(image =>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  )
}


