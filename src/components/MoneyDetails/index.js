import {MoneyDetailsList,BalanceItem,BalanceImage,BalanceText,BalancePara,
    BalanceAmount,IncomeItem,IncomeImage,IncomeText,IncomePara,IncomeAmount,
    ExpenseItem,ExpenseImage,ExpenseText,
    ExpensePara,ExpenseAmount} from './styled'

const MoneyDetails=(props)=>{
    const {income,expense,balance}= props
    return(
        <MoneyDetailsList>
            <BalanceItem>
             <BalanceImage src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance"/>
             <BalanceText>
                <BalancePara>Your Balance</BalancePara>
                <BalanceAmount>Rs {balance}</BalanceAmount>
             </BalanceText>
            </BalanceItem>
            <IncomeItem>
                <IncomeImage src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income"/>
                <IncomeText>
                <IncomePara>Your Income</IncomePara>
                <IncomeAmount>Rs {income}</IncomeAmount>
             </IncomeText>
            </IncomeItem>
            <ExpenseItem>
                <ExpenseImage src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses"/>
                <ExpenseText>
                <ExpensePara>Your Expenses</ExpensePara>
                <ExpenseAmount>Rs {expense}</ExpenseAmount>
                </ExpenseText>
            </ExpenseItem>

        </MoneyDetailsList>
    )

}
export default MoneyDetails