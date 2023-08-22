import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import styled from "styled-components";

const App = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const [detailAddress, setDetailAddress] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();

  const searchAddress = location.state;
  const postcode = searchAddress?.postcode;
  const address = searchAddress?.address;

  const handleSearch = () => {
    navigate("/search");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/succeed");
  };

  useEffect(() => {
    if (postcode && address && detailAddress) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [postcode, address, detailAddress]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <AdressWrapper>
          <PostCodeAndButton>
            <Input
              m="3px"
              size="md"
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
            />
            <Input
              m="3px"
              size="md"
              type="button"
              onClick={handleSearch}
              value="주소 검색"
            />
          </PostCodeAndButton>
          <Input
            m="3px"
            size="md"
            type="text"
            placeholder="주소"
            value={address}
            readOnly
          />
          <Input
            m="3px"
            size="md"
            type="text"
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </AdressWrapper>
        <ButtonWrapper>
          <Button
            colorScheme="twitter"
            isDisabled={!isFormComplete}
            type="submit"
          >
            배송지 저장하기
          </Button>
        </ButtonWrapper>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AdressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostCodeAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default App;
