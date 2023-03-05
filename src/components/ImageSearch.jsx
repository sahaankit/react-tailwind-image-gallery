//image search component
import { useState } from "react"
const ImageSearch = ({searchText}) => { //pass searchText as a prop to ImageSearch
  const [text, setText] = useState('') //sets search term state

  const onSubmit = (e) => { //on form submit,prevent default action and pass 'text' to searchText
    e.preventDefault()
    searchText(text)
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-5 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-purple-500 py-2">
          <input onChange={(e)=> setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..." aria-label="search term" />
          <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch