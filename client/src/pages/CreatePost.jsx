import React, { useState } from 'react'

const CreatePost = () => {
  const[title, setTitle]= useState('')
  const[category, setCategory] = useState('Uncategorized')
  const[description , setDescription] = useState('')
  const[thumbnail, setThumbnail] = useState('')

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">
          This Is An Error Message
        </p>
        <form className='form create-post__form'>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
        </form>
      </div>
    </section>
  )
}

export default CreatePost
