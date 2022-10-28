import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Router from "next/router";
const Signup = () => {
  const [username, setUser] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/users/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Router.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header path={"Create-account"} />
      <div className="bg-[#f1f2f6] h-auto">
        <div className="md:w-[20%] w-[50%] mx-auto flex flex-col py-16">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="px-4 my-4 py-[0.75rem] outline-none bg-[#f1f2f6] border border-black"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 my-4 py-[0.75rem] outline-none bg-[#f1f2f6] border border-black"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="px-4 my-4 py-[0.75rem] outline-none bg-[#f1f2f6] border border-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={username}
              placeholder="username"
              className="px-4 my-4 py-[0.75rem] outline-none bg-[#f1f2f6] border border-black"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="px-4 my-4 py-[0.75rem] outline-none bg-[#f1f2f6] border border-black"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="submit"
              className="p-4 mb-4 bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black"
            >
              SIGN UP
            </button>
            <Link href="/">
              <a>
                <span className="py-2 px-2 hover:text-[#ac7c2d]">
                  return to store
                </span>
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
