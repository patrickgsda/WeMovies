import { CircularProgress } from "@mui/material";
import { Container } from "./styles";

const LoadingPage = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default LoadingPage;
