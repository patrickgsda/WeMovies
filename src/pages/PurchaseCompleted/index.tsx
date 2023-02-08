import PurchaseDone from "../../assets/imgs/purchaseDone.png";
import InformationCard from "../../components/InformationCard";

const PurchaseCompleted = () => {
  return (
    <InformationCard
      text={"Compra realizada com sucesso!"}
      img={PurchaseDone}
    />
  );
};

export default PurchaseCompleted;
