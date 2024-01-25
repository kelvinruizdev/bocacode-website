import React from "react";
import styles from '../page.module.css'
import Link from "next/link";
import data from '../data/get-started.json'
import UpcomingDates from "../components/UpcomingDates/page";
import Testimonials from "../components/Testimonials/page";

const GetStarted = () => {
  const { sub_heading, heading, paragraph, address, email_info, courses_info, talent, form } = data;
  return (
    <main className={styles.main}>
      <div className="maxwidth-1366 m-auto py-50 flex gap-24 column-tablet container ">

        <div className="w-50 w-100-tablet gap-16 column justify-center">
          <div className="column">
            <h2 className="fs-18 fw-700 lh-28 color-rose">{sub_heading}</h2>
            <h1 className="fs-30 fw-700 lh-36 ">{heading}</h1>
          </div>

          <p
            className="fs-16 fw-400 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>

        <div className="w-50 w-100-tablet border-v4 rounded-16 p-32 ">
          <p className="fs-16 lh-24 fw-400 color-gray pb-16">{form.motivation}</p>
          <form className="column gap-16">
            <div className="flex gap-16 column-sm">
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-grisnoble" placeholder="First Name" type="text" required="" name="firstName" />
              </div>
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-grisnoble" placeholder="Last Name" type="text" required="" name="lastName" />
              </div>
            </div>

            <div className="flex gap-16 column-sm">
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-grisnoble" placeholder="Email address" type="email" id="email" pattern=".+@example\.com" required name="email" />
              </div>
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-grisnoble" placeholder="Phone Number" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </div>
            </div>

            <div className="flex ">
              <select name="contact-method" id="contact-method" className="flex form-input w-100 p-12 rounded-8 bg-white fs-14 fw-400 lh-20 color-grisnoble">
                <option disabled>Preferred Contact Method</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div>
              <input className="button-red w-100 justify-center fw-500 fs-16 lh-24" type="submit" value={form.button.text} />
            </div>

            <p className="fs-14 fw-400 lh-20 color-gray">{form.conditions}</p>
          </form>

        </div>

      </div >

      <div className="align-items-center column py-50 gap-45">
        <div className="column text-center px-20">
          <h1 className="fs-36 fw-800 lh-40 fs-sm-30 ">{data?.info?.heading}</h1>
          <h1 className="fs-36 fw-800 lh-40 fs-sm-30 color-blueberry">{data?.info?.call_msg}</h1>
        </div>
      </div>

      <UpcomingDates data={data?.upcoming_dates} />

      <Testimonials/>

    </main >
  );
};

export default GetStarted;