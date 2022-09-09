import Header from "./Header/Header";
import {ReactNode} from "react";
import Typography from "../UI/Typography/Typography";
import Container from "../general/Container";

type Props = {
  children: ReactNode;
  title: string;
}

function Layout({children, title}: Props) {
  return (
    <>
      <Header/>

      <Container className='w-11/12 mx-auto my-10 p-3 md:p-6 lg:p-10'>
        <Typography size='xl' className='text-center'>
          {title}
        </Typography>

        <main>
          {children}
        </main>
      </Container>

    </>
  );
}

export default Layout;