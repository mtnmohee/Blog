import "./Post.scss";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1870094/pexels-photo-1870094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro
        iste possimus accusamus nisi dolorum nemo illo reprehenderit rerum fugit
        aspernatur ratione quam expedita omnis laboriosam nobis, tenetur, itaque
        quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        porro iste possimus accusamus nisi dolorum nemo illo reprehenderit rerum
        fugit aspernatur ratione quam expedita omnis laboriosam nobis, tenetur,
        itaque quae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Neque porro iste possimus accusamus nisi dolorum nemo illo reprehenderit
        rerum fugit aspernatur ratione quam expedita omnis laboriosam nobis,
        tenetur, itaque quae.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque porro iste possimus accusamus nisi dolorum nemo illo
        reprehenderit rerum fugit aspernatur ratione quam expedita omnis
        laboriosam nobis, tenetur, itaque quae.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque porro iste possimus accusamus nisi
        dolorum nemo illo reprehenderit rerum fugit aspernatur ratione quam
        expedita omnis laboriosam nobis, tenetur, itaque quae.
      </p>
    </div>
  );
}
