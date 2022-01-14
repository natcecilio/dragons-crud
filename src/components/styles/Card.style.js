import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  transition: 0.3s all ease-in-out;
  &:hover {
    margin-top: -10px;
  }
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  font-family: "Libre Baskerville", serif;
`;
export const CardBody = styled.div`
  padding-right: 0px;
  padding-left: 25px;

  h3 {
    color: #666666;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`;
export const ButtonEdit = styled.button`
  width: 50%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #ffbd31;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;
export const ButtonTrash = styled.button`
  width: 50%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #814369;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;
