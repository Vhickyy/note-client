import Header from './Header'
type childrenProps = {
  children: React.ReactNode
}
const Layout = ({children}: childrenProps) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout