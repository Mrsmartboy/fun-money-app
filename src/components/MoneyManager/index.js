import {v4 as uuidv4} from 'uuid'

import { useState } from 'react'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import {MoneyManagerContainer,ProfileContainer,ProfileName,ProfileDescription, 
    SpanElement,TransactionForm,TransactionHead,
    TitleLabel,TitleInput,AmountLabel,AmountInput,
    TypeLabel,Select,OptionItem,SubmitButton,TransactionHistoryContainer,
    HistoryContainer,HistoryHead,HistoryListContainer,
    HistoryItem,Title,Amount,Type} from './styled'

const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]

const MoneyManager=()=>{

    const [titleInput,setTitleInput]= useState("")
    const [amountInput,setAmountInput]= useState('')
    const [optionId,setOptionId]= useState(transactionTypeOptions[0].optionId)
    const [transactionList,setTransactionList]= useState([])

const onChangeTitle=(event)=>{
         setTitleInput(event.target.value)
}

const onChangeAmount=(event)=>{
      setAmountInput(event.target.value)
}

const onChangeType=(event)=>{
    setOptionId(event.target.value)
}

const onSubmitForm=(event)=>{
          event.preventDefault()

if(titleInput.length!==0 && amountInput.length!==0){


          const typeDetails = transactionTypeOptions.find(each=>each.optionId===optionId)
          const {displayText}= typeDetails

          const newItem={
            id:uuidv4(),
            title:titleInput,
            amount:parseInt(amountInput),
            type:displayText,
          }

          setTransactionList(prevState=>[...prevState,newItem])
          setTitleInput("")
          setAmountInput("")
          setOptionId(transactionTypeOptions[0].optionId)
        }else{
          alert("Please enter the valid details")
        }
   }

   const deleteItem=(id)=>{
         const filteredResults = transactionList.filter(each=>each.id!==id)
         setTransactionList(filteredResults)
   }

   const getIncomeAmount=()=>{
          let incomeAmount=0;
          transactionList.forEach(eachItem=>{
            if (eachItem.type===transactionTypeOptions[0].displayText){
              incomeAmount+=eachItem.amount
            }
          })

          return incomeAmount
   }

   const getExpenseAmount=()=>{
    let expenseAmount=0;
    transactionList.forEach(eachItem=>{
      if (eachItem.type===transactionTypeOptions[1].displayText){
        expenseAmount+=eachItem.amount
      }
    })

    return expenseAmount
   }



   const income =  getIncomeAmount()
   const expense = getExpenseAmount()
   const balance = income-expense
    return(
        <MoneyManagerContainer>
            <ProfileContainer>
                <ProfileName>Hi,Richard</ProfileName>
                <ProfileDescription>Welcome back to your <SpanElement>Money Manager</SpanElement></ProfileDescription>
            </ProfileContainer>
            <MoneyDetails income={income} expense={expense} balance={balance}/>
            <TransactionHistoryContainer>

            <TransactionForm onSubmit={onSubmitForm}>
                <TransactionHead>Add Transaction</TransactionHead>
                <TitleLabel htmlFor='title'>TITLE</TitleLabel>
                <TitleInput placeholder="TITLE" type="text" id="title" onChange={onChangeTitle} value={titleInput}/>
                  <AmountLabel htmlFor='amount'>AMOUNT</AmountLabel>
                  <AmountInput placeholder="AMOUNT" type="text" id="amount" onChange={onChangeAmount} value={amountInput}/>
                  <TypeLabel htmlFor='type'>TYPE</TypeLabel>
                  <Select id="type" onChange={onChangeType} value={optionId}>
                    {transactionTypeOptions.map(each=>(
                        <OptionItem key={each.optionId} value={each.optionId}>{each.displayText}</OptionItem>
                    ))}
                  </Select>
                  <SubmitButton type="submit">Add</SubmitButton>
            </TransactionForm>
            <HistoryContainer>
              <HistoryHead>History</HistoryHead>
              <HistoryListContainer>
                  <HistoryItem>
                    <Title>Title</Title>
                    <Amount>Amount</Amount>
                    <Type>Type</Type>
                  </HistoryItem>
                  {transactionList.map(each=>(
                    <TransactionItem key={each.id} each={each} deleteItem={deleteItem}/>
                  ))}
              </HistoryListContainer>
            </HistoryContainer>
            </TransactionHistoryContainer>
        </MoneyManagerContainer>
    )
}

export default MoneyManager