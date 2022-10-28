import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

const Detailview = ({ errorCode, prod, params }) => {
  let router = useRouter();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("1");
  const [ids, setIds] = useState([]);
  const [comment, setComment] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [rev, setRev] = useState("");
  const [usr, setUsr] = useState("");
  const [del, setDel] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      fetch("http://127.0.0.1:8000/cart/wishes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${sessionStorage.getItem("token")}`,
        },
      })
        .then((data) => data.json())
        .then((res) => {
          setWishlist(res);
          res.forEach((element) => {
            if (element.product.id == prod.id) {
              setActive(true);
            } else {
              setActive(false);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetch("http://127.0.0.1:8000/cart/carts/", {
      method: "GET",
      headers: {
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let id = [];
        res.forEach((element) => {
          id.push(element.product.id);
        });
        setIds(id);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("http://127.0.0.1:8000/users/user/", {
      method: "GET",
      headers: {
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsr(res.user_data.id);
      })
      .catch((err) => {
        console.log(err);
      });

    //comment
    fetch("http://127.0.0.1:8000/api/comments/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleClick = (e) => {
    if (!active == true) {
      fetch("http://127.0.0.1:8000/cart/wishes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ product: prod.id, wish: true }),
      })
        .then((data) => data.json())
        .then((res) => {
          setActive(res.wish);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!active == false) {
      fetch("http://127.0.0.1:8000/cart/wishes/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: del }),
      })
        .then((data) => data.json())
        .then((res) => {
          alert("deleted");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleAdd(e) {
    if (prod.is_active) {
      if (ids.includes(prod.id)) {
        alert("item already in cart");
      } else {
        fetch("http://127.0.0.1:8000/cart/carts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify({ product: prod.id, quantity: 1 }),
        })
          .then((data) => data.json())
          .then((res) => {
            alert(res.success);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("not available");
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  function postComment(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ product: prod.id, comment: rev }),
    })
      .then((data) => data.json())
      .then((res) => {
        alert("success");
        setRev("");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function delComment(e) {
    fetch("http://127.0.0.1:8000/api/comments/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id: e }),
    })
      .then((data) => data.json())
      .then((res) => {
        alert("deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Head>
        <title>{prod.title}</title>
      </Head>
      <Header path={"product-view"} />
      <h1 className="text-gray-900 text-4xl mt-8 text-center title-font font-medium mb-4">
        {prod.title}
      </h1>
      <div className="flex md:flex-row flex-col-reverse w-[80%] mx-auto py-16">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <div className="flex mb-4">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Description" value="1" />
                    <Tab label="Review" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <p className="leading-relaxed mb-4 h-40">
                    {prod.product_type.product_des}
                  </p>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Size</span>
                    <span className="ml-auto text-gray-900">
                      {prod.product_type.size}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Availability</span>
                    {prod.is_active ? (
                      <span className="ml-auto text-green-500">in stock</span>
                    ) : (
                      <span className="ml-auto text-red-500">Out of stock</span>
                    )}
                  </div>
                  <div className="flex border-t text-2xl border-gray-200 py-2">
                    <span className="text-gray-500">price</span>
                    <span className="ml-auto text-gray-900">
                      ${prod.regular_price}
                    </span>
                  </div>
                  <div className="flex mt-4">
                    <button
                      className={`${
                        prod.is_active
                          ? "bg-black hover:bg-[#ac7c2d]"
                          : "opacity-60 bg-gray-700 cursor-not-allowed"
                      } flex  text-white ml-auto  border-0 py-2 px-6 focus:outline-none  rounded`}
                    >
                      Buy
                    </button>

                    <form onSubmit={handleAdd}>
                      <button
                        type="submit"
                        className={`${
                          prod.is_active
                            ? "bg-black hover:bg-[#ac7c2d]"
                            : "opacity-60 bg-gray-700 cursor-not-allowed"
                        } flex ml-4 text-white  border-0 py-2 px-6 focus:outline-none  rounded`}
                      >
                        Add to cart
                      </button>
                    </form>
                    <button
                      onClick={handleClick}
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Add to wishlist"
                      className={`rounded-full w-10  h-10 bg-gray-200 p-0 border-0 ${
                        active ? "text-pink-600" : "text-gray-500"
                      } inline-flex items-center justify-center  ml-4`}
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </TabPanel>

                <TabPanel value="2">
                  <div className="comment m-4">
                    <form onSubmit={postComment} className="w-full">
                      <label className="block mb-2">
                        <textarea
                          placeholder="Add your review"
                          value={rev}
                          onChange={(e) => setRev(e.target.value)}
                          className=" p-[0.5rem] block w-full border border-black focus:outline-none"
                          rows="4"
                        ></textarea>
                      </label>
                      <button
                        type="submit"
                        className="px-3 py-2 text-sm text-blue-100 bg-black hover:bg-[#ac7c2d] rounded"
                      >
                        Comment
                      </button>
                    </form>
                  </div>
                  <div className="">
                    {comment.map(
                      (e) =>
                        e.product.id == prod.id && (
                          <div
                            key={e.id}
                            className="w-full h-auto border relative cursor-pointer m-2 border-black p-4"
                          >
                            <h1 className="font-bold text-lg">
                              {e.commentlists.uname}
                            </h1>
                            <p>{e.comment}</p>
                            {e.commentlists.user == usr && (
                              <span
                                className="bg-[#ac7c2d] h-[2rem] w-[1rem] text-white p-[0.2rem] absolute top-0 left-[28rem]"
                                onClick={() => delComment(e.id)}
                              >
                                x
                              </span>
                            )}
                          </div>
                        )
                    )}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
        <div className="max-h-[600px] ">
          <Image
            alt="ecommerce"
            objectFit="contain"
            height={"500"}
            width={"500"}
            src={prod.product_image[0].image}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  let data = await fetch(`http://127.0.0.1:8000/api/${params.slug}`);
  const errorCode = data.ok ? false : "404";
  let prod = await data.json();
  return {
    props: { errorCode, prod, params }, // will be passed to the page component as props
  };
}

export default Detailview;
