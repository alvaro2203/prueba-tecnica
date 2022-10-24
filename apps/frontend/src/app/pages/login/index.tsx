import { Logo } from '../../components/Logo';
import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Form,
  Grid,
  Left,
  Right,
  Label,
  InputWrapper,
  Input,
  Icon,
} from './styles';
import { Button, Span } from '../../components/styled';
import { getUsers } from '../../hooks/useGetUsers';

export function Login() {
  const navigate = useNavigate();
  const { users } = getUsers();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('ucademy-token')) {
      navigate('/');
    }
  }, []);

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event?.preventDefault();
      setIsSubmitting(true);
      const user = users.find((user) => user.username === username);
      if (user && password !== '') {
        localStorage.setItem('ucademy-token', user._id);
        navigate('/');
      } else {
        setErrorMessage('Usuario o contraseña incorrectos');
      }
      setIsSubmitting(false);
    },

    [username, password, isSubmitting, errorMessage]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Logo />
      <hr />
      <hr />
      <Label size="12px" weight="500">
        <Span color="red">* </Span>
        Nombre de usuario
      </Label>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '97.5%', margin: '0.8em 0 0.8em 0' }}
      />
      <Label size="12px" weight="500">
        <Span color="red">* </Span>
        Contraseña
      </Label>
      <InputWrapper>
        <Input
          type={passwordShown ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '97.5%', margin: '0.8em 0.8em 0.8em 0' }}
        />
        <Icon onClick={() => setPasswordShown(!passwordShown)}>
          {passwordShown ? (
            <AiFillEye size={15} />
          ) : (
            <AiFillEyeInvisible size={15} />
          )}
        </Icon>
      </InputWrapper>
      {errorMessage !== '' && (
        <Span color="red" style={{ paddingBottom: '15px' }}>
          {errorMessage}
        </Span>
      )}
      <Grid>
        <Left>
          <input type="checkbox" /> Remember me
        </Left>
        <Right href="/login">
          <span>Olvidé mi contraseña</span>
        </Right>
      </Grid>
      <Button
        type="submit"
        disabled={isSubmitting}
        background="#262D34"
        color="white"
        style={{ margin: '0 auto' }}
      >
        Iniciar sesión
      </Button>
    </Form>
  );
}
