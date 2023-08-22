import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../utils/getAddress";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
const Search = () => {
  const navigate = useNavigate();

  const handleComplete = (data: any) => {
    const address = getAddress(data);
    navigate("/", {
      state: {
        postcode: data.zonecode,
        address: address,
      },
    });
  };

  return (
    <Container>
      <Text fontSize="3xl">주소 찾기</Text>
      <DaumPostcode onComplete={handleComplete} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

export default Search;
