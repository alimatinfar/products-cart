import Header from "./pages/Home/Header/Header";
import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

function Layout({children}: Props) {
  return (
    <>
      <Header/>

      <main className='p-10'>
        {children}
      </main>
    </>
  );
}

export default Layout;