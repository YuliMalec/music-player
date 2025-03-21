
import { FC } from "react";
interface MainProp{
    children:React.ReactNode
}

export const Main:FC<MainProp> =  async({
children}
) => {
     
    
      return (
        <div className="
        flex
        flex-row
        rounded-lg
        h-[100vh]
        w-[100vw]
        p-3
        overflow-hidden
        overflow-y-auto">
        {children}
        </div>
      );
    }