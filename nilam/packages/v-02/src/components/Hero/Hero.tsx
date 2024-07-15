import "animate.css/animate.min.css";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { BsEnvelope } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const zoomIn = cssTransition({
  enter: "animate__animated animate__zoomIn",
  exit: "animate__animated animate__zoomIn",
});

const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();
  async function onSubmitForm(values: any): Promise<void> {
    let config: AxiosRequestConfig = {
      method: "post",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response: AxiosResponse<any> = await axios(config);

      if (response.status === 200) {
        toast.success("Your mail submitted!", {
          position: toast.POSITION.TOP_CENTER,
          transition: zoomIn,
        });
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <section
      id="hero"
      className="flex items-center min-h-screen py-20 bg-center bg-no-repeat bg-cover lg:py-0 justify--center hero-background relative"
    >
      <ToastContainer />
      <div className="container">
        <div className="grid items-center gap-6 justify--center lg:grid-cols-2">
          <div className="relative text-center text-white lg:max-w-xl">
            <h1 className="uppercase text-brand">Domain.Com</h1>

            <h1 className="pb-5 mt-4 mb-5 sub-title">is for sale.</h1>
            <p className="text-white mt-4 background-brand text-xl inline-block py-2.5 px-4 mb-6 pricing-before border-4 border-brand">
              Price $200 only
            </p>
            <p>
              The domain name (without content) is available for sale by its
              owner. Any offer you submit is binding for 7 days. If you require
              futher information contact with me.
            </p>
            <p className="pb-3 mt-8 mb-5 text-xl leading-8 text-center sub-title">
              Contact info:
            </p>
            <p className="flex items-center justify-center gap-2 mb-4">
              <BsEnvelope /> example@example.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt /> (345) 456 789 23
            </p>
          </div>
          <div
            className="w-full px-8 pt-6 pb-8 lg:mx-8 bg-white border-t-8 bg-opacity-90 lg:max-w-lg border-emerald-500"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className="grid">
                <div className="pb-0 form-group">
                  <label htmlFor="name">
                    <span>Name*</span>
                    <input
                      className={`focus:outline-none border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 focus:ring-2 ${
                        errors.name ? "ring-2 ring-red-500" : null
                      }`}
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "You most enter name",
                        },
                      })}
                      placeholder="Your name"
                    />
                  </label>
                  <span className="py-2 text-sm text-red-400">
                    {errors?.name?.message}
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="name">
                    <span>Email*</span>
                    <input
                      className={`focus:outline-none border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 focus:ring-2 ${
                        errors.email ? "ring-2 ring-red-500" : null
                      }`}
                      type="email"
                      name="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "You must enter email address",
                        },
                        minLength: {
                          value: 8,
                          message: "This is not long enough to be an email",
                        },
                        maxLength: {
                          value: 120,
                          message: "This is too long",
                        },
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "invalid email address",
                        },
                      })}
                      placeholder="Your email"
                    />
                  </label>
                  <span className="py-2 text-sm text-red-400">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <span>Phone</span>
                    <input
                      className="border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none focus:ring-2"
                      type="tel"
                      {...register("phone")}
                      placeholder="Your phone"
                    />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <span>Proposal*</span>
                  <textarea
                    className={`focus:outline-none border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 focus:ring-2 ${
                      errors.message ? "ring-2 ring-red-500" : null
                    }`}
                    rows={4}
                    {...register("message", {
                      required: {
                        value: true,
                        message: "You need to enter your message",
                      },
                      maxLength: {
                        value: 1000,
                        message:
                          "You message can't be more than 1000 characters",
                      },
                      minLength: {
                        value: 50,
                        message: "You message must be longer then this!",
                      },
                    })}
                    placeholder="Write your proposal"
                  ></textarea>
                </label>
                <span className="py-2 text-sm text-red-400">
                  {errors?.message?.message}
                </span>
              </div>
              <div>
                <button type="submit" className="w-full btn-brand">
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
