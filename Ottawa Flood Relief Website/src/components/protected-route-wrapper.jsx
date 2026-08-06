import { SignUpModal } from "./sign-up-pop-up-window";

export function ProtectedRoute({ isLoggedIn, setLogin, children}){
  if (!isLoggedIn){
    return <SignUpModal setLogin={setLogin}/>
  }

  return children;
}