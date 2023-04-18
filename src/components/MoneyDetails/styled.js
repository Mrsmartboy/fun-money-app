import styled from "styled-components";

export const MoneyDetailsList= styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:676px){
    flex-direction: column;
   
  }
`

export const BalanceItem = styled.li`
    background-color: #ecfccb;
    border: 2px solid #84cc16;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    padding: 15px;
    @media screen and (max-width:676px){
    margin-bottom: 20px;
  }
    
`

export const IncomeItem= styled.li`
background-color: #cffafe;
    border: 2px solid #06b6d4;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    padding: 15px;
    @media screen and (max-width:676px){
    margin-bottom: 20px;
  }
`
export const ExpenseItem= styled.li`
   background-color: #ede9fe;
    border: 2px solid #7c3aed;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    padding: 15px;
    @media screen and (max-width:676px){
    margin-bottom: 20px;
  }
`


export const BalanceImage= styled.img`
  width: 102px;
  height: 102px;
  margin-right: 10px;
  
`
export const BalanceText= styled.div`
   display: flex;
   flex-direction: column;
   color: #7e858e;
   font-size: 20px;
   font-weight: bold;
`



export const IncomeImage= styled.img`
  width: 102px;
  height: 102px;
  margin-right: 10px;
  
`
export const IncomeText= styled.div`
   display: flex;
   flex-direction: column;
   color: #7e858e;
   font-size: 20px;
   font-weight: bold;
`


export const ExpenseImage= styled.img`
  width: 102px;
  height: 102px;
  margin-right: 10px;
  
`
export const ExpenseText= styled.div`
   display: flex;
   flex-direction: column;
   color: #7e858e;
   font-size: 20px;
   font-weight: bold;
`
export const BalancePara=styled.p`
  margin-bottom: 0px;
`
export const BalanceAmount= styled.p`
  margin-top: 0px;

`
export const IncomePara= styled.p`
  margin-bottom: 0px;

`
export const IncomeAmount= styled.p`
  margin-top: 0px;

`
export const ExpensePara=styled.p`
  margin-bottom: 0px;

`
export const ExpenseAmount= styled.p`
  margin-top: 0px;

`
 