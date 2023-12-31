import { Form } from '../../components/Form'
import { FC } from 'react'
import logo from '../../assets/HOPIC_SHARP.png'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth.js'
import { toast } from 'react-toastify'

interface SignInProps {}

export const SignIn: FC<SignInProps> = () => {
  const { signIn } = useAuth()
  function handleSignIn(data: FormData) {
    const email = data.get('email') as string
    const password = data.get('password') as string
    if (!email || !password) {
      toast.error('Preencha todos os campos', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return
    }
    try {
      signIn({ email, password })
    } catch (error) {
      toast.warn('Senha ou e-mail incorreto', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }
  }

  return (
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div className="logo-section">
        <img src={logo} alt="" />
        <div className="logo-text">
          <p> S</p>
          <p> T</p>
          <p> O</p>
          <p> R</p>
          <p> E</p>
        </div>
      </div>
      <div className="form-section">
        <Form
          formTitle="Entre na plataforma! "
          onSubmit={handleSignIn}
          signIn
          ActionButton="Login"
        />
      </div>
    </Container>
  )
}
