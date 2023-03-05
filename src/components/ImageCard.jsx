const ImageCard = ({ image }) => {
  const tags = image.tags.split(',') //splits tags into a list
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="flex flex-column">
        <img src={image.webformatURL}  alt="" className="w-full object-cover" />
      </div>
      <div className="flex-1 px-6 py-4"> {/*sets image cards to equal size*/}
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
            <strong>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>{image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index)=> (
        <span key={index} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2">#{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard

