import React, { useState, useEffect } from "react";
import questions from "../faq.json";
import Banner from "../components/banner";

import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://media.istockphoto.com/photos/young-woman-selling-products-online-and-packaging-goods-for-shipping-picture-id1215768348?b=1&k=20&m=1215768348&s=170667a&w=0&h=mS6zyXpAzkOBhU5gt-DVLLoyD3SfGcc86oXlwXEXxV0="
            alt=""
          />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to FashionFlipped
            </h2>
            <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Battle fast fashion and the gentrification of thrift stores with
              FashionFlipped! We partner with upcyclers to create curated
              thrifts for our users at a cheap cost. <br></br>
              <br></br>Ready to elevate your style?
              <div class="action">
                <button
                  class="action-button"
                  onClick={() =>
                    isAuthenticated
                      ? (window.location.href = "/profile")
                      : loginWithRedirect()
                  }
                >
                  Get started
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div></div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
            </span>
            How it works?
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            1 of 1s delivered monthly
          </p>
        </div>
        <div class="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div class="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div class="w-px h-full bg-gray-300 lg:w-full lg:h-px"></div>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Profile</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                1
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Create a 1 minute profile: select images that describe your
              fashion sense
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Subscribe</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Select your subscription tier: basic, premium, pro
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Drop</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                3
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Recieve your subscription drop on our surprise drop day!
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Evolve</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                4
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Rate your drop to help our algorithm evolve with you!
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <a href="/" class="mb-6 sm:mx-auto">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </a>
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                </span>
                Frequently Asked Questions
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Question not on the list? Contact us at FashionFlipped@gmail.com
                with your inquiry :)
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                class="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p class="text-lg font-medium">
                  When will I recieve my package?
                </p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-3 text-gray-600 transition-transform duration-200"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      points="2,7 12,17 22,7"
                      stroke-linejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              <div class="p-4 pt-0">
                <p class="text-gray-700">
                  We announce the drop day 24 hours before you will recieve your
                  package. Use the hashtags #FashionFlipped #Drop Day to share
                  your haul! on social media!
                </p>
              </div>
            </div>
            <div class="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                class="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p class="text-lg font-medium">
                  How do you select FashionFlipped designers?
                </p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-3 text-gray-600 transition-transform duration-200"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      points="2,7 12,17 22,7"
                      stroke-linejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              <div class="p-4 pt-0">
                <p class="text-gray-700">
                  Designers go through a vetting process handled by our in-house
                  fashion team to ensure quality and creativity in their
                  designs. If you are ever unhappy with your package, please let
                  us know and we will issue a full refund for your package.
                </p>
              </div>
            </div>
            <div class="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                class="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p class="text-lg font-medium">
                  How can I upgrade my subscription?
                </p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-3 text-gray-600 transition-transform duration-200"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      points="2,7 12,17 22,7"
                      stroke-linejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              <div class="p-4 pt-0">
                <p class="text-gray-700">
                  After you recieve your monthly package, you can switch your
                  subscription!
                </p>
              </div>
            </div>
            <div class="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                class="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p class="text-lg font-medium">
                  How can I share feedback with the FashionFlipped Team?
                </p>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-3 text-gray-600 transition-transform duration-200"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      points="2,7 12,17 22,7"
                      stroke-linejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              <div class="p-4 pt-0">
                <p class="text-gray-700">
                  We always love to hear ways we could continue to improve our
                  product from our users like you! Send an email to us at
                  FashionFlipped@gmail.com!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
