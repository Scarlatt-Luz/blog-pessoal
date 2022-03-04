import React, {ChangeEvent, useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'

import './CadastroUsuario.css'
import { cadastroUsuario } from '../../services/Service'
import User from '../../models/User'

function CadastroUsuario() {

    let history = useHistory()

    const [confirmarSenha,setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
      //target é o alvo do campo confirmarSenha
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso!', {
          position: "top-right",
          autoClose: 2000, 
          hideProgressBar: false,
          closeOnClick: true, 
          pauseOnHover: false,
          draggable: false, 
          theme: "colored", 
          progress: undefined
      })
        }else{
            toast.error('Dados inconsistentes! Favor verificar as informações de cadastro.', {
              position: "top-right",
              autoClose: 2000, 
              hideProgressBar: false,
              closeOnClick: true, 
              pauseOnHover: false,
              draggable: false, 
              theme: "colored", 
              progress: undefined
          })
        }
    }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='imagem2'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box padding={10}>
          <form onSubmit={onSubmit}>

            <Typography className='texto2' variant='h3' gutterBottom color='textPrimary' component='h2' align='center'>Cadastrar</Typography>
            
            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant='outlined' name='nome' margin='normal' fullWidth required/>
            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant='outlined' name='usuario' margin='normal' fullWidth required />
            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Mínimo 8 caracteres' />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmar senha" variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required placeholder='Mínimo 8 caracteres' />
            
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decoration-none'>
                <Button variant='contained' color='secondary' className='btnCancelar'>Cancelar</Button>
              </Link>
              <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
            </Box>
          </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default CadastroUsuario