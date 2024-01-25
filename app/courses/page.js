import React from "react";
import styles from '../page.module.css'
import PricingCard from '../components/PricingCard/page';
import TitleContainer from '../components/TitleContainer/page';
import data from '../data/courses.json'
import Testimonials from "../components/Testimonials/page";
import TwoColumns from '../components/TwoColumns/page';
import Card from '@/app/components/Card/page';

const Courses = () => {
  const { sub_heading, heading, paragraph, list, email_info, courses_info, talent, form } = data;

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
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input" placeholder="First Name" type="text" required="" name="firstName" />
              </div>
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input" placeholder="Last Name" type="text" required="" name="lastName" />
              </div>
            </div>

            <div className="flex gap-16 column-sm">
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input" placeholder="Email address" type="email" id="email" pattern=".+@example\.com" required name="email" />
              </div>
              <div className="w-100">
                <input className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input" placeholder="Phone Number" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
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
      </div>


      <TitleContainer
        data={data.title_container}
        classContainer="text-center m-auto gap-16 "
        classHeading="fs-36 fw-700 lh-36 fs-sm-30 fw-sm-700"
        classParagraph="fs-16 fw-400 lh-28 color-gray-v2"
      />

      {(data?.pricing_info_variable) && (
        <div className='gap-24 m-auto column py-30 container maxwidth-1366'>

          {data?.pricing_info_variable?.map((card, index) => {
            return (
              <PricingCard
                key={index}
                data={card}
              />
            )
          })}

        </div>
      )}

      <Testimonials />

      <TitleContainer
        data={data?.title_container_3}
        classContainer="text-center py-30 w-50 m-auto"
        classHeading="fs-30 fw-700 lh-36 "
        classParagraph="fs-24 fw-300 lh-32 color-lightgray"
      />

      {data?.qualities && (
        <div className='container row gap-45 wrap py-30 maxwidth-1366 m-auto justify-around justify-center-sm '>

          {data?.qualities?.map((qualitie, index) => {
            return (
              <Card
                key={index}
                data={qualitie}
                link_text={data?.link_text}
                course
              />
            )
          })}

        </div>
      )}

      <TwoColumns left={data?.two_columns?.left} right={data?.two_columns?.right} />

    </main>
  );
};

export default Courses;