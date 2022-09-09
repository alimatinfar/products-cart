import AddIcon from "../svg/AddIcon";
import MinusIcon from "../svg/MinusIcon";
import TrashIcon from "../svg/TrashIcon";
import {useState} from "react";


function AddToCartButtons() {
  const [itemNumber, setItemNumber] = useState<number>(0);

  function addItemHandler() {
    setItemNumber((prev) => ++prev);
  }

  function removeItemHandler() {
    setItemNumber((prev) => prev > 0 ? --prev : prev);
  }

  return itemNumber === 0 ? (
    <button
      className={"p-1 bg-custom-red-500 rounded-lg"}
      onClick={addItemHandler}
    >
      <AddIcon />
    </button>
  ) : (
    <div
      className='flex justify-between items-center bg-custom-red-500/5 rounded-lg'
    >
      <button className="p-1 pr-1 " onClick={addItemHandler}>
        <AddIcon className="fill-custom-red-500 w-4"/>
      </button>
      <div className="w-3.5 text-center">{itemNumber}</div>
      <button className="p-1 pl-1 " onClick={removeItemHandler}>
        {itemNumber === 1 ? (
          <TrashIcon className="text-custom-red-500 w-3.5 "/>
        ) : (
          <MinusIcon className="fill-custom-red-500 w-4"/>
        )}
      </button>
    </div>
  )
}

export default AddToCartButtons;