import React, {useState} from "react"
import { AddItemButton } from "./styles"

interface AddNewItemProps {
    onAdd(text:string):void  // this is callback function that will be called when we click create item button
    toggleButtonText:string  // this is the text we'll render when this component is a button.
    dark ?: boolean           // dark is flag that we'll pass to the styled component
}


export const AddNewItem = (props:AddNewItemProps) => {
    const[showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText, dark} = props;

    if(showForm) {
        // we will show item creation form here
    }

    return (
        <AddItemButton dark = {dark} onClick = {()=>setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}