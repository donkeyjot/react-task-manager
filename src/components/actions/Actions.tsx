import Button from "./Button";
import AddTask from "../AddTask";

const Actions = () => {
    const onClick = () => {
      console.log('NONONO')
    }
    return (
      <div>
           <Button text='Add' color='green' onClick={onClick} />
      </div>
    );
}

export default Actions;
