import Container from "../../general/Container";
import Link from "next/link";
import CartIcon from "../../svg/CartIcon";
import CustomLink from "../../UI/CustomLink";
import {useRouter} from "next/router";


function Header() {

  const router = useRouter()
  const pathname = router.pathname

  return (
    <Container className='h-16 px-2 md:px-20 flex items-center justify-between'>
      <CustomLink href='/' className={`text-xl font-semibold duration-200 hover:text-primary ${pathname === '/' && 'text-primary'}`}>
        صفحه اصلی
      </CustomLink>
      <CustomLink href='/cart' className={`${pathname === '/cart' && 'text-primary'}`}>
        <CartIcon fillColor='fill-current cursor-pointer duration-300 hover:text-primary'/>
      </CustomLink>
    </Container>
  );
}

export default Header;