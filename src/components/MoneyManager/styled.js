import styled from 'styled-components'

export const MoneyManagerContainer= styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 width: 100%;
align-items :center ;
background-color: #ffffff;

`

export const ProfileContainer= styled.div`
  padding: 20px;
  background-image: url("https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png");
  background-size: cover;
  width: 80%;
  margin-top: 30px;
`

export const ProfileName= styled.h1`
color: #475569;
font-size: 30px;
font-weight: bold;
`

export const ProfileDescription= styled.p`
 color:#475569 ;
 font-size: 25px;
 font-weight: 500;

`
export const SpanElement= styled.span`
 color:  #0b69ff;
 font-weight: bold;
`

export const TransactionHistoryContainer= styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-bottom: 20px;

  @media screen and (max-width:676px){
       flex-direction: column;
  }

`

export const TransactionForm=styled.form`
   border: 2px solid  #7e858e;
   border-radius: 10px;
   padding: 10px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   flex-grow: 2;
   margin-right: 20px;
   @media screen and (max-width:676px){
    margin-right: 0;
    margin-bottom: 20px;
  }
`
export const TransactionHead = styled.h1`
  color: #475569;
  font-size: 25px;
  font-weight: bold;
`
export const TitleLabel= styled.label`
  color: #7e858e;
  font-weight:  bold;
  font-size: 10px;
`
export const TitleInput = styled.input`
  padding: 8px;
  font-size: 15px;
  margin-bottom: 10px;
  color: #475569;
  font-weight: bold;

`
export const AmountLabel = styled.label`
     color: #7e858e;
  font-weight:  bold;
  font-size: 10px;
`
export const AmountInput = styled.input`
    padding: 8px;
    font-size: 15px;
    margin-bottom: 10px;
    color: #475569;
    font-weight: bold;
`
export const TypeLabel = styled.label`
   color: #7e858e;
  font-weight:  bold;
  font-size: 10px;
`
export const Select= styled.select`
   padding: 5px;
   color: #475569;
   font-size: 15px;
   font-weight: bold;
   cursor: pointer;
`
export const OptionItem = styled.option``

export const SubmitButton = styled.button`
  background-color:  #0b69ff;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  margin-top: 10px;
  width: 30%;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
`
export const HistoryContainer = styled.div`
  border: 2px solid  #7e858e;
  border-radius: 5px;
  padding: 30px;
  flex-grow: 3;
  
 

`
export const HistoryHead= styled.h1`
   color: #1e293b;
   font-size: 20px;
   font-weight: bold;
  
`
export const HistoryListContainer = styled.ul`
   list-style-type: none;
   padding-left: 0px;
`

export const HistoryItem= styled.li`
   display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #cbd5e1;
  
  padding-left: 24px;
  padding-right: 24px;
`
export const Title= styled.p`
   color: #475569;
  font-size: 12px;
  width: 30%;
  margin-right: none;

`
export const Amount=styled.p`
color: #475569;
  font-size: 12px;
  width: 30%;
  margin-right: none;

`
export const Type = styled.p`
color: #475569;
  font-size: 12px;
  width: 40%;
  margin-right: none;
  
`