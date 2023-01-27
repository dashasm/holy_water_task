import styled from "styled-components";

export const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
  display: flex;
  flex-direction: column;
`;

export const FormPositionWrapper = styled.div`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(ShadowWrapper)`
  width: 320px;
  min-width: 320px;
  background-color: #1e1f21;
  color: #dddddd;
  box-shadow: unset;
  padding: 10px;
`;

export const EventTitle = styled.div`
  font-size: 25px;
  padding-bottom: 5px;
`;

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: unset;
`;

export const EventCloseButton = styled.div`
  font-size: 35px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const InputTitleHeader = styled.div`
  color: #7a7a7a;
  margin-bottom: 5px;
`;

