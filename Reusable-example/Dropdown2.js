import Dbutton from './Dbutton';

const DropdownMenu = () => {
 
  return (
    <div>
      Payment Component
    <Dbutton options={['Pay 1', 'Pay 2', 'Pay 3']} 
     buttonContent="Payment"
    />
    </div>

  );
};
export default DropdownMenu;