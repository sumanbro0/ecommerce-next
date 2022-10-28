import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
// import { useBeforeUnload } from 'react-use';


const Signin = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [token, setToken] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8000/users/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((data) => data.json()).then((res) => {
            if (res.token) {
                sessionStorage.setItem('token', res.token)
                router.push('/cart');
                setInterval(() => {
                    window.location.reload()
                }, 100);
            }
        })
            .catch(err => {
                console.error(err)
                setError("Username or password Incorrect");
            });

    }
    function handleLogout() {
        fetch("http://localhost:8000/users/logoutall/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${sessionStorage.getItem('token')}`
            },
        }).then((data) => {
            sessionStorage.removeItem('token')
            window.location.reload()
        })
            .catch(err => {
                console.error(err)
            });
    }
    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [token])


    // useBeforeUnload(localStorage.clear())
    try {

        if (token) {
            return (
                <div className="bg-[#f1f2f6]">
                    <Header path={"create-account"} />
                    <div className="w-[50%] mx-auto py-16 divide-black divide-y-2 rounded-sm h-[100vh] ">
                        <div className="my-4">

                            <button onClick={handleLogout}
                                className="p-4 bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black"
                                type="submit"
                            >
                                LOG OUT
                            </button>
                        </div>
                        <div className="flex text-sm cursor-pointer  flex-col py-4 w-[90%]">

                            <Link href="/">
                                <a>
                                    <span className="py-2 hover:text-[#ac7c2d]">
                                        return to store
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        };

    } catch (error) {
        console.log(error)
    }


    return (
        <div className="bg-[#f1f2f6]">
            <Header path={"create-account"} />
            <div className="w-[50%] mx-auto py-16 divide-black divide-y-2 rounded-sm h-[100vh] ">
                <form onSubmit={handleSubmit}>
                    <p className="text-center text-red-700">{error}</p>
                    <div className="my-4">
                        <input
                            className="w-full px-4 py-2 my-4  bg-[#f1f2f6] text-lg outline-none border border-black"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full px-4 py-2 mb-8  bg-[#f1f2f6] text-lg outline-none border border-black"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <button
                            className="p-4 bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black"
                            type="submit"
                        >
                            SIGN IN
                        </button>
                    </div>
                    <div className="flex text-sm cursor-pointer  flex-col py-4 w-[90%]">
                        <Link href="/signup">
                            <a>
                                <span className="py-2 hover:text-[#ac7c2d]">
                                    Create account
                                </span>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <span className="py-2 hover:text-[#ac7c2d]">
                                    return to store
                                </span>
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
