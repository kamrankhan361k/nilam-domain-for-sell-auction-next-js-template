import "animate.css/animate.min.css";
import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const zoomIn = cssTransition({
  enter: "animate__animated animate__zoomIn",
  exit: "animate__animated animate__zoomIn",
});

const Offer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
      const response = await axios(config);

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
      className="py-32 bg-center bg-no-repeat bg-cover hero-background"
    >
      <ToastContainer />
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="border-2 rounded border-gray-100 shadow-xl lg:max-w-xl">
            <div
              className="p-10 m-3 text-center text-white bg-gray-900  bg-opacity-90"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h3 className="text-2xl">WE OFFER YOU</h3>
              <h3 className="mt-6 text-xl">EXAMPLE.COM</h3>
              <h4 className="mt-5 text-4xl">$40 ONLY</h4>
            </div>
          </div>

          <div
            className="w-full  border-2 border-gray-100 rounded px-8 pt-6 pb-8 my-0 ml-auto bg-white shadow-xl bg-opacity-90 lg:max-w-lg"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <h1 className="text-center">Make an Offer</h1>
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

export default Offer;