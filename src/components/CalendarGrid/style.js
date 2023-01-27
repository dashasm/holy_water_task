import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  ${(props) => props.isHeader && `border-bottom: 1px solid #4D4C4D`}
`;

export const CellWrapper = styled.div`
  padding: 5px;
  height: 90px;
  background-color: ${(props) => (props.isWeekday ? "#27282A" : "#1E1F21")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 650px) {
    height: 70px;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayWrapper = styled.div`
  color: ${(props) => (props.isSelectedMonth ? "#DDDDDD" : "#555759")};
  font-size: 14px;
`;

export const CurrentDay = styled.div`
  background: red;
  color: white;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
