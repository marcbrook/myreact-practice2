import styled from "styled-components";
export const Tabs = styled.div 
`overflow: hidden;`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;  
  width: 80px; 
  height: 50px;
  position: relative;

  background-color: ${props => (props.active ? "blue" : "yellow")};

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
 