import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInterceptor";

const Home = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get("https://book-store-app-six-roan.vercel.app/book/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(() => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-dark text-white">
      {/* NAVBAR */}
      <div className="bg-info">
        <nav className="navbar navbar-dark bg-info text-black">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <span className="navbar-brand mb-0 h1 d-flex align-items-center">
              <img
                src="logo.jpg"
                width="30"
                height="30"
                className="me-2"
                alt="Logo"
              />
              BOOK STORE
            </span>

            <div>
              <Link to="/book/create" className="btn btn-success me-2">
                Add Book
              </Link>
              <Link to="/" className="btn btn-primary" onClick={()=>{
                sessionStorage.removeItem("token")
              }}>
                LOGOUT
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Carousel */}

      <div id="carouselExample" className="carousel slide mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="banner3.jpg" className="d-block w-100 h-80" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="banner2.jpg" className="d-block w-100 h-80" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="banner.jpg" className="d-block w-100 h-80" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container" style={{marginBottom :"40px"}}>
        <div className="row" >
           < div className="col-lg-3" >
               <div className="card bg-dark"  >
                <img src="image1.jpg" className="card-img-top" alt="..."  style={{ width: "200px", height: "300px" }}></img>
               </div>
            </div>
             < div className="col-lg-3">
               <div className="card bg-dark" >
                <img src="image2.jpg" className="card-img-top" alt="..."  style={{ width: "200px", height: "300px" }}></img>
               </div>
            </div>
             < div className="col-lg-3">
               <div className="card bg-dark" >
                <img src="image3.jpg" className="card-img-top" alt="..." style={{ width: "200px", height: "300px" }}></img>
               </div>
            </div>
             < div className="col-lg-3">
               <div className="card bg-dark" >
                <img src="image4.jpg" className="card-img-top" alt="..." style={{ width: "200px", height: "300px" }}></img>
               </div>
            </div>

        </div>

      </div>

      {/* Collections */}
      <h2 style={{ textAlign: "center"}}>LIST OF AVAILABLE BOOKS</h2>
      {/* <div
        className="m-5 border border-white  "
        style={{ borderRadius: "20px" }}
      >
        <table
          className="table table-hover table-striped-columns mt-3 border border-black  "
          style={{ borderRadius: "20px" }}
        >
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Published Year</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>

          <tbody>
            {data.map((datas, index) => (
              <tr key={index}>
                <td>{datas.title}</td>
                <td>{datas.author}</td>
                <td>{datas.publishedYear}</td>
                <td>
                  <Link
                    to={`/book/details/${datas._id}`}
                    className="btn btn-success m-2"
                  >
                    Show Book
                  </Link>
                  <Link
                    to={`/book/edit/${datas._id}`}
                    className="btn btn-primary m-2"
                  >
                    Edit Book
                  </Link>
                  <Link
                    to={`/book/delete/${datas._id}`}
                    className="btn btn-danger m-2"
                  >
                    Delete Book
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="m-5 border border-white shadow p-3 bg-dark" style={{ borderRadius: "20px" }}>
  <div className="table-responsive">
    <table className="table table-hover table-striped-columns border border-white text-white">
      <thead className="table-info">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published Year</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody  className="table-dark">
        {data.map((datas) => (
          <tr key={datas._id}>
            <td>{datas.title}</td>
            <td>{datas.author}</td>
            <td>{datas.publishedYear}</td>
            <td>
              <Link to={`/book/details/${datas._id}`} className="btn btn-success m-2">Show Book</Link>
              <Link to={`/book/edit/${datas._id}`} className="btn btn-primary m-2">Edit Book</Link>
              <Link to={`/book/delete/${datas._id}`} className="btn btn-danger m-2">Delete Book</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


          <section className="py-5 bg-dark">
      <div className="container text-center">
        <h2 className="mb-5">What Our Readers Say</h2>
        <div className="row justify-content-center">
          
          <div className="col-md-4 mb-4 ">
            <div className="card h-100 p-3 shadow-sm border border-white bg-dark text-light">
              <img
                src="customer1.jpg"
                alt="Ananya S."
                className="rounded-circle mx-auto"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text text-light">"A beautiful collection of books! Fast delivery and excellent customer service."</p>
                <h5 className="card-title mt-3">Ananya S.</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 p-3 shadow-sm border border-white bg-dark text-light">
              <img
                src="customer2.jpg"
                alt="Rahul M."
                className="rounded-circle mx-auto"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text text-light">"This bookstore has rare finds I couldn’t get anywhere else. Highly recommended!"</p>
                <h5 className="card-title mt-3">Rahul M.</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 p-3 shadow-sm border border-white bg-dark text-light">
              <img
                src="customer3.jpg"
                alt="Divya K."
                className="rounded-circle mx-auto"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text text-light">"User-friendly website and genuine prices. I love their personalized recommendations!"</p>
                <h5 className="card-title mt-3">Divya K.</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      <div>
        <footer className="bg-info text-dark text-center py-3 ">
          <div className="container">
            <p className="mb-0">© 2025 Book Store. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
