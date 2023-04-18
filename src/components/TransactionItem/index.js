
import {TableRow,Title1,Amount1,Type1,ButtonContainer,DeleteButton,DeleteImage} from './styled'
const TransactionItem =(props)=>{
          const {each,deleteItem}=props 
          const {title,amount,type,id} = each

    const onDeleteButton=()=>{
             deleteItem(id)
    }      
    
    return (
        <TableRow>
            <Title1>{title}</Title1>
            <Amount1>{amount}</Amount1>
            <Type1>{type}</Type1>
            <ButtonContainer>
            <DeleteButton type="button" onClick={onDeleteButton}>
                <DeleteImage src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete"/>
            </DeleteButton>
            </ButtonContainer>
        </TableRow>
    )
}


export default TransactionItem

