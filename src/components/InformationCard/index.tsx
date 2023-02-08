import { CardContent, StyledButton } from "./styles";
import { Paragraph, Card } from "../../styles/utils";
import { useNavigate } from "react-router-dom";

interface InformationCardProps {
  text: string;
  img: string;
}

const InformationCard = ({ text, img }: InformationCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "532.8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Paragraph size="mediumX">{text}</Paragraph>
        <img src={img} alt="Cart empty" />
        <StyledButton onClick={() => navigate("/")}>
          <Paragraph size="small" color="white">
            VOLTAR
          </Paragraph>
        </StyledButton>
      </CardContent>
    </Card>
  );
};

export default InformationCard;
