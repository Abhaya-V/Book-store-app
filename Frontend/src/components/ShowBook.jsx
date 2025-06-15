import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../axiosInterceptor";

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`https://book-store-app-six-roan.vercel.app/book/get/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0",
        height: "99vh",
        width: "99%",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card border border-dark mt-4 bg-dark text-light">
            <img src={book.Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">{book.title}</h5>
              <p className="text-center">Author : {book.author}</p>
              <p className="text-center">
                Published Year: {book.publishedYear}
              </p>
              <div className="text-center">
                <Link to={`/book/edit/${id}`} className="btn btn-warning m-2">
                  Edit
                </Link>
                <Link to="/home" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
