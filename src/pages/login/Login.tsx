import React, {ChangeEvent, useState, useEffect} from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

  let history = useHistory();
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin, 
      [e.target.name] : e.target.value
    })
  }

  useEffect(() => {
    if(token != ''){
      history.push('/home')
    }
  }, [token])

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    //console.log('userLogin: ' + Object.values(userLogin));

    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      alert('Usuário logado com sucesso!')
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao logar!')
    }
}

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className='textos1'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography className='login-font' variant='h3' gutterBottom color='textPrimary' component='h2' align='center'>Entrar</Typography>
            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant='outlined' name='usuario' margin='normal' fullWidth />

            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant='outlined' name='senha' margin='normal' type='password' fullWidth />
              <Box marginTop={2} textAlign='center'>
                  <Button className='button' type='submit' variant='contained' >Logar</Button>
              </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1} >
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Link to='/cadastro-usuario'>
              <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
              </Link>
          </Box>
        </Box>
      </Grid>
      <Grid className='imagem' xs={6}></Grid>
    </Grid>
  )
}

export default Login