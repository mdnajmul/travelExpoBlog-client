import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import cloudImage from "../../../images/cloud-upload.png";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  marginTop: "20px",
};

const ManagePost = () => {
  const { user } = useAuth();

  const [allBlogs, setAllBlogs] = useState([]);
  const [rating, setRating] = useState(null);
  const [reload, setReload] = useState(false);
  let i = 1;

  useEffect(() => {
    fetch(`https://mighty-savannah-90389.herokuapp.com/allblogs`)
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
      });
  }, [reload]);

  // Haqndle Rating
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mighty-savannah-90389.herokuapp.com/delete-blog/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Blog has been deleted.", "success");
              setReload(!reload);
            }
          });
      }
    });
  };

  // const status = "approved";
  const handleUpdate = (id) => {
    fetch(`https://mighty-savannah-90389.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            "Good job!",
            "Your Blog Status Updated Successfully!",
            "success"
          );
          setReload(!reload);
        }
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let { title, image, details, expense, location } = data;
    expense = parseInt(expense);
    let rate = parseInt(rating);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image[0]);
    formData.append("details", details);
    formData.append("expense", expense);
    formData.append("location", location);
    formData.append("rating", rate);

    fetch(`https://mighty-savannah-90389.herokuapp.com/update-blog`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Good job!", "Your Blog Updated Successfully!", "success");
          setReload(!reload);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          color: "#B77323",
          marginTop: "20px",
          fontWeight: "bold",
        }}
        gutterBottom
      >
        All Travel Experience Blogs
      </Typography>
      {allBlogs.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ background: "#001E3C" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: "700" }}>
                  #
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Written By
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Posted Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allBlogs.map((blog) => (
                <TableRow
                  key={blog?._id}
                  sx={{ "&:last-child td, &:last-child th": { bblog: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i++}
                  </TableCell>
                  <TableCell align="center">{blog?.title}</TableCell>
                  <TableCell align="center">{blog?.writer}</TableCell>
                  <TableCell align="center">{blog?.date}</TableCell>
                  <TableCell align="center">
                    {" "}
                    {blog?.status === "approved" ? (
                      <>
                        <span
                          style={{
                            marginRight: "8px",
                            color: "green",
                            fontWeight: "bold",
                          }}
                        >
                          Approved
                        </span>
                        <Button variant="contained" disabled>
                          Update Status
                        </Button>
                      </>
                    ) : (
                      <>
                        <span
                          style={{
                            marginRight: "8px",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          Pending
                        </span>
                        <button
                          onClick={() => handleUpdate(blog?._id)}
                          className="update-btn"
                          style={{
                            marginRight: "10px",
                            border: "none",
                            outline: "none",
                            background: "orange",
                            color: "white",
                            fontWeight: "bold",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          Update Status
                        </button>
                      </>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <button
                      style={{ border: "none", marginRight: "5px" }}
                      onClick={() => handleDelete(blog?._id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </button>
                    <button onClick={handleOpen} style={{ border: "none" }}>
                      <EditIcon sx={{ color: "blue" }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Container>
            <div>
              <h2 className="mb-4">Update Blog Detail</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Tour Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tour Title"
                  style={{ background: "#E5E5E5" }}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-danger">Please enter a tour title</span>
                )}
              </div>

              <div className="mt-4">
                <span
                  className="mb-2 d-inline-block"
                  style={{ fontWeight: "bold" }}
                >
                  Image
                </span>
                <div class="input-group mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control"
                    style={{ background: "#E5E5E5" }}
                    id="inputGroupFile02"
                    {...register("image", { required: true })}
                  />
                  <label class="input-group-text" htmlFor="inputGroupFile02">
                    <img style={{ height: "35px" }} src={cloudImage} alt="" />{" "}
                    <span style={{ color: "#251D58", fontWeight: "bold" }}>
                      Upload image
                    </span>
                  </label>
                </div>
                {errors.image && (
                  <span className="text-danger">Please choose an image</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Write Experience
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write your tour experience"
                  style={{ background: "#E5E5E5" }}
                  {...register("details", { required: true })}
                ></textarea>
                {errors.details && (
                  <span className="text-danger">
                    Please write your tour experience
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Total Expense
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost in integer value"
                  style={{ background: "#E5E5E5" }}
                  {...register("expense", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">Expense is mandatory</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write travel location"
                  style={{ background: "#E5E5E5" }}
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-danger">Location is mandatory</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Give Review
                </label>
                <ReactStars
                  count={5}
                  size={24}
                  onChange={ratingChanged}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="rgb(250, 202, 81)"
                />
              </div>

              <input
                type="submit"
                className="btn fw-bold"
                style={{ background: "#251D58", color: "#fff" }}
                value="Submit"
              />
            </form>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManagePost;
