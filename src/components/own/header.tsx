import { ArrowLeft, LogOut } from "lucide-react";
import { Button } from "../ui/button";

interface HeaderProps {
  currentPageTitle: string;
  handleSignOff: () => void;
  handlePreviousPage: () => void;
  showPreviousPageButton: boolean
}

const Header = ({ currentPageTitle, handleSignOff, handlePreviousPage, showPreviousPageButton }: HeaderProps) => {
  return (
    <div className="bg-gray-950 w-[100%] h-[60px] mb-2 p-2 flex justify-between items-center">
      <h1>{`PIC MANAGER - ${currentPageTitle}`}</h1>
      <div className="flex space-x-1.5">
        { showPreviousPageButton ?
          <Button variant="secondary" onClick={handlePreviousPage}>Previous page<ArrowLeft /></Button> : null }
        <Button variant="secondary" onClick={handleSignOff}>Sign off<LogOut /></Button>
      </div>
    </div>
  )
}

export default Header;