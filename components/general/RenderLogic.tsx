import {ReactNode} from "react";

type Props = {
  error: string | null,
  loading: boolean,
  children: ReactNode
}

function RenderLogic({error, loading, children}: Props) {
  let renderElem;

  if (error) {
    renderElem = <div className='h-40 w-full flex-center text-red-500'>{error}</div>
  } else if (loading) {
    renderElem = <div>...loading</div>
  } else {
    renderElem = <>{children}</>
  }

  return renderElem;
}

export default RenderLogic;