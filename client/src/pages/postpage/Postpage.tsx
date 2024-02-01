import Header from "../../components/header/Header";
import PostForm from "../../components/postForm/PostForm";
import "./postpage.css";

const Postpage = () => {
  return (
    <div className="postPage">
      <Header />
      <div className="content">
        <h2>Post Employee</h2>
        <PostForm />
      </div>
    </div>
  );
};

export default Postpage;
