import styled from "styled-components";

export const TableRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cbd5e1;
  border-right: 2px solid #cbd5e1;
  border-left: 2px solid #cbd5e1;
  padding-left: 24px;
  padding-right: 24px;
`

export const Title1 = styled.p`
   color: #475569;
  font-size: 12px;
  width: 30%;
  align-self: center;
`
export const Amount1 = styled.p`
 color: #475569;
  font-size: 12px;
  width: 30%;
  align-self: center;

`

export const Type1= styled.p`
 color: #475569;
  font-size: 12px;
  width: 30%;
  align-self: center;

`

export const ButtonContainer = styled.div`
  display: flex;
  width: 10%;
`
export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  align-self: flex-end;
  cursor: pointer;
 
`
export const DeleteImage = styled.img`
  width: 20px;
  align-self: center;
  background: transparent;
  border: none;
  outline: none;
`