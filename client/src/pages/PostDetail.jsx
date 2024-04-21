import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/mern-blog-assets-main/blog22.jpg'

const PostDetail = () => {
  return (
   <section className="post-detail">
    <div className="container post-detail__container">
      <div className="post-detail__header">
        <PostAuthor/>
        <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title! </h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt=""/>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet magni ex laboriosam tenetur ad sit hic, recusandae dolore inventore cum neque consequuntur necessitatibus cupiditate sapiente suscipit a nam sunt eligendi id. Eligendi, ut esse! Dolorem error voluptatem sint beatae hic?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et sapiente ex consectetur deleniti aut quas error sed fuga iure molestias saepe nesciunt harum debitis, temporibus soluta, impedit distinctio, voluptates cumque itaque quis magnam? Pariatur quibusdam nemo perferendis repellendus doloribus, dolorum unde corrupti eum inventore dolor quas quam quis vel! Adipisci harum optio accusamus! In?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed cumque illo reprehenderit iste nulla iusto itaque deserunt inventore dolorem minus odio commodi rem maiores rerum, hic nostrum tempora facilis. Itaque facere maxime quisquam iure voluptatum, voluptatem enim perspiciatis natus est rerum deserunt aliquam quo fugiat distinctio praesentium voluptatibus! Provident consequuntur tenetur asperiores. Quos error assumenda, aut, non natus nostrum sint repellat eos alias nihil dignissimos asperiores ut incidunt maiores debitis earum quidem commodi sed facere, deleniti accusantium pariatur modi. Voluptate qui debitis nulla modi, error sapiente doloremque consequatur. Nobis atque illum voluptates soluta, dolorem officia eos, quaerat facilis at ipsum praesentium alias expedita quod aspernatur sit magni sunt accusamus perferendis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iste placeat magni! Esse eveniet amet laborum culpa atque distinctio pariatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, amet quisquam! Nam, illum esse facilis doloribus ducimus molestiae quia reprehenderit, fugiat quisquam tempore incidunt eveniet at nesciunt adipisci. Ratione ab accusantium voluptatum dicta maiores, illum saepe repellat dolore neque praesentium, aspernatur asperiores ad amet. Temporibus, exercitationem! Reiciendis dignissimos, dolorum incidunt laudantium odit asperiores tempora maiores nesciunt excepturi veritatis, inventore officiis vitae magnam quos et, autem animi vel officia doloribus culpa qui nihil maxime nulla. Ut consectetur maxime voluptatum inventore facere? Quia rerum quam alias possimus unde nesciunt odio, libero similique minus tenetur qui quo, recusandae nisi? Tempora maxime veritatis voluptas nemo soluta quod accusamus inventore, quasi magni eum doloribus ratione molestias veniam nobis voluptatibus voluptatum velit expedita dolorum quaerat odit incidunt porro nihil! Alias consectetur repellendus laudantium quasi obcaecati, nisi architecto expedita tempore porro praesentium ducimus ea ab facilis quas animi dolores asperiores neque aspernatur suscipit dolor minima. Fuga, corporis impedit sapiente asperiores sed recusandae aliquam, aut iusto voluptates eius eaque debitis, fugiat nulla perspiciatis nisi officia. Quaerat, aperiam exercitationem corporis distinctio omnis architecto. Voluptate, ullam nihil. Odit corporis dolorum aperiam fuga voluptatibus, labore vitae rerum velit sunt dolores id aliquam officia totam esse! Omnis dolores nihil ipsam dicta repellat?
      </p>
    </div>
   </section>
  )
}

export default PostDetail
