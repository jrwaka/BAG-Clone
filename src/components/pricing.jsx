import React, { useState } from "react";

function Pricing() {
  const [changestate, setChange] = useState("button2");

  return (
    <div>
      <div
        className={`my-5 mx-20 border rounded-3xl flex flex-col items-center ${
          changestate === "button1"
            ? "bg-blue-100"
            : changestate === "button2"
            ? "bg-purple-100"
            : "bg-orange-100"
        }`}
      >
        <div className="justify-center w-[50%]">
          <div className="bg-blue-950 m-12 flex rounded-3xl h-12">
            <button
              className={`text-white w-1/3 rounded-3xl m-2 font-semibold text-sm ${
                changestate === "button1" ? "bg-blue-600" : " bg-transparent"
              }`}
              onClick={() => {
                setChange("button1");
              }}
            >
              TALENTS
            </button>
            <button
              className={`text-white w-1/3 rounded-3xl m-2 font-semibold text-sm ${
                changestate === "button2" ? "bg-purple-600" : "bg-transparent"
              }`}
              onClick={() => {
                setChange("button2");
              }}
            >
              EMPLOYERS
            </button>
            <button
              className={`text-white w-1/3 rounded-3xl m-2 font-semibold text-sm  ${
                changestate === "button3" ? "bg-blue-600" : " bg-transparent"
              }`}
              onClick={() => {
                setChange("button3");
              }}
            >
              UNIVERSITIES
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center m-5">PRICING</h1>
        <div
          className={`w-full h-[35rem]  gap-2 px-2 ${
            changestate === "button1" ? "flex" : "hidden"
          }`}
        >
          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-blue-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-blue-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>

          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-blue-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">BASIC</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                $29$149 /year
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-blue-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>

          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-blue-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-blue-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>
        </div>

        <div
          className={`w-full h-[35rem] gap-2 px-2 ${
            changestate === "button2" ? "flex" : "hidden"
          } `}
        >
          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-purple-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-purple-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>

          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-purple-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-purple-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>

          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-purple-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-purple-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>

          <div className="border bg-white rounded-3xl flex flex-col justify-between w-1/3">
            <div className="border bg-purple-600 rounded-2xl m-5">
              <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
              <h1 className="m-4 text-xl font-bold text-white">
                Free /forever
              </h1>
            </div>
            <div className="">
              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">4 simulations per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">12 quizzes per month.</h1>
              </div>

              <div className="px-4 flex space-x-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="font-semibold">Unlimited job applications.</h1>
              </div>
            </div>
            <button className="py-3 bg-purple-600 text-white rounded-2xl items-center font-bold text-lg m-4">
              Get Started
            </button>
          </div>
        </div>

        <div
          className={`border h-[35rem] bg-white rounded-3xl flex-col justify-between w-1/3 ${
            changestate === "button3" ? "flex" : "hidden"
          }`}
        >
          <div className="border bg-orange-500 rounded-2xl m-5">
            <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
            <h1 className="m-4 text-xl font-bold text-white">Free /forever</h1>
          </div>
          <div className="">
            <div className="px-4 flex space-x-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="font-semibold">4 simulations per month.</h1>
            </div>

            <div className="px-4 flex space-x-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="font-semibold">12 quizzes per month.</h1>
            </div>

            <div className="px-4 flex space-x-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="font-semibold">Unlimited job applications.</h1>
            </div>
          </div>
          <button className="py-3 bg-orange-500 text-white rounded-2xl items-center font-bold text-lg m-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
