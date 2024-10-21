import React, { useState, useEffect } from "react";
import "../css/pages/BlogManage.css";
import "../css/pages/BlogManagePopup.css";
import axios from "axios";
import { backend } from "../../App";
import toast from "react-hot-toast";

const ManageBlog = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(null); // State for the current blog being edited

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${backend}/api/v1/blog/get-all-blog`);
      setAllBlogs(res.data.blogs);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axios.delete(`${backend}/api/v1/blog/delete/${deleteId}`, {
        withCredentials: true,
      });
      fetchBlog();
      setDeleteModal(false);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", currentBlog.title);
    formData.append("content", currentBlog.content);
    if (currentBlog.image) {
      formData.append("image", currentBlog.image);
    }

    try {
      const res = await axios.put(`${backend}/api/v1/blog/update/${currentBlog._id}`, formData, {
        withCredentials: true,
      });
      fetchBlog();
      setShowModal(false);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="blog-manage-container2"
        style={{ opacity: showModal ? 0.5 : 1 }}
      >
        <h4 className="m-3">Manage Blog</h4>
        <hr />
        <div className="blog-manage-sec">
          <div className="heading-1 col-2">
            <label htmlFor="show">Show:-</label>
            <select name="" id="">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="heading-2 col-6">
            <span>entries</span>
          </div>
          <div className="heading-3 col-4">
            <label htmlFor="search">Search :-</label>
            <input type="search" />
          </div>
        </div>

        <h5 className="text-center mt-2">Blog Entries</h5>

        <div className="blog-manage-content">
          <table className="blog-manage-table">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBlogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td>{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>
                    <img
                      style={{ height: "100%" }}
                      src={blog.image}
                      alt={blog.title}
                    />
                  </td>
                  <td className="add-blog-description-box">{blog.content}</td>
                  <td>
                    <button
                      id="manage-gall_edit-btn"
                      type="button"
                      className="btn btn-success m-1 Edit"
                      onClick={() => {
                        setCurrentBlog(blog);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDeleteId(blog._id);
                        setDeleteModal(true);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="blog-manage-pagination">
          <p>Showing 1 to to 1 of 1 entries</p>
        </div>
      </div>
      {showModal && (
        <MyModal
          setShowModal={setShowModal}
          currentBlog={currentBlog}
          setCurrentBlog={setCurrentBlog}
          handleEdit={handleEdit}
        />
      )}
      {deleteModal && (
        <MyDelete
          setDeleteModal={setDeleteModal}
          handleDelete={handleDelete}
          loading={loading}
        />
      )}
    </>
  );
};

const MyModal = ({ setShowModal, currentBlog, setCurrentBlog, handleEdit }) => {
  return (
    <div className="blog-manage-popup-modal">
      <div className="blog-manage-pop">
        <h4 className="m-3 add-blog-manage-popup-heading">Edit Blog</h4>
        <i
          className="fa-sharp fa-regular fa-circle-xmark add-manage-blog-delete-popup-cross"
          onClick={() => setShowModal(false)}
        ></i>
        <hr />
        <div id="add-blog-manage-popup-sec">
          <label className="add-manage-blog-img-imp">
            <input
              type="file"
              className="add-blog-manage-popup-file-input"
              onChange={(e) => setCurrentBlog({ ...currentBlog, image: e.target.files[0] })}
            />
            <i className="fa-solid fa-cloud-arrow-up add-blog-manage-popup-upload-icon"></i>
            <p> Drop files here or click to upload.</p>
          </label>
          <div className="add-manage-blog-popup-sec-content">
            <h5 className="add-manage-blog-popup-img-name">Blog Name</h5>
            <br />
            <input
              className="add-manage-blog-popup-inpu-name"
              type="text"
              value={currentBlog?.title || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
            />
            <br />
            <h5 className="add-manage-blog-popup-name-des">Blog Description</h5>
            <br />
            <input
              className="add-manage-blog-popup-inpu-name-des"
              type="text"
              value={currentBlog?.content || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
            />
            <br />
            <button className="add-manage-blog-popup-sec-button" onClick={handleEdit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyDelete = ({ setDeleteModal, handleDelete, loading }) => {
  return (
    <div className="add-manage-blog-popup-delete-modal">
      <div className="add-manage-blog-popup-delete-sec">
        <i
          className="fa-sharp fa-regular fa-circle-xmark add-manage-blog-delete-popup-cross"
          onClick={() => setDeleteModal(false)}
        ></i>
        <i className="fa-solid fa-triangle-exclamation add-manage-blog-delete-popup-triangle-exclamation"></i>
        <h4>Do You Want To Delete This!</h4>
        <button
          className="add-manage-blog-popup-delete-button"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ManageBlog;
