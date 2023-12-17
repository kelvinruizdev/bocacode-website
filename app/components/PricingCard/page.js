import Icon from "../Icon/check";
import '../../styles/pricingcard.css'
import Link from "next/link";

const PricingCard = ({
  data_variable,
  data_static,
  info,
  selectedPlan,
  setSelectedPlan,
  buttonText,
  jobGuarantee,
  index,
}) => {

  console.log(data_variable, data_static, "asdasdasd")
  return (
    <>
      <div className="pricingcard-container row">
        <div className="pricingcard-right-side column">
          <div>
            <h3>{data_variable?.heading}</h3>
            <p>{data_variable?.paragraph}</p>
          </div>
          <div className="row middle">
            <h4>{data_static?.about}</h4>
            <div className="border" />
          </div>
          <div>
            <ul>
              {
                data_variable?.bullets.map((bullet, index) => {
                  return(
                  <li key={index} className="row">
                    <Icon icon={data_static?.icon} width="24" style={{margin: "0 15px 0 0"}} />
                    {bullet}
                  </li>)
                })
              }
            </ul>
          </div>
        </div>

        <div className="pricingcard-left-side column">
          <span>{data_static?.just}</span>
          <h1>{data_static?.price}</h1>
          <p>{data_variable?.finance_msg}</p>
          <Link href={data_static?.button.button_link}>
            <div className="button"
              style={{
                background: `${data_static?.button.button_color}`,
                color: `${data_static?.button.button_textcolor}`
              }}
            >{data_static?.button.button_text}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingCard;