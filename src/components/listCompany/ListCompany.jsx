import IMG_Company1 from "../../assets/IMG_Company1.png";
import "./_listCompany.scss";

const ListCompany = () => {
  return (
    <div className="listCompany">
      <div className="boxImg">
        <img src={IMG_Company1} alt="image" />
      </div>
      <div className="boxImg">
        <img src={IMG_Company1} alt="image" />
      </div>
      <div className="boxImg">
        <img src={IMG_Company1} alt="image" />
      </div>
    </div>
  );
};

export default ListCompany;
