import "./SinglePost.scss";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/2773531/pexels-photo-2773531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mohey</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          eligendi sed culpa tempore temporibus totam, magni corporis placeat,
          error perferendis fugit excepturi fugiat illum reprehenderit libero
          assumenda aperiam natus. Numquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem eligendi sed culpa tempore
          temporibus totam, magni corporis placeat, error perferendis fugit
          excepturi fugiat illum reprehenderit libero assumenda aperiam natus.
          Numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eligendi sed culpa tempore temporibus totam, magni corporis
          placeat, error perferendis fugit excepturi fugiat illum reprehenderit
          libero assumenda aperiam natus. Numquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem eligendi sed culpa tempore
          temporibus totam, magni corporis placeat, error perferendis fugit
          excepturi fugiat illum reprehenderit libero assumenda aperiam natus.
          Numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eligendi sed culpa tempore temporibus totam, magni corporis
          placeat, error perferendis fugit excepturi fugiat illum reprehenderit
          libero assumenda aperiam natus. Numquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem eligendi sed culpa tempore
          temporibus totam, magni corporis placeat, error perferendis fugit
          excepturi fugiat illum reprehenderit libero assumenda aperiam natus.
          Numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eligendi sed culpa tempore temporibus totam, magni corporis
          placeat, error perferendis fugit excepturi fugiat illum reprehenderit
          libero assumenda aperiam natus. Numquam.
        </p>
      </div>
    </div>
  );
}
