import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, Text, FormButton, FormInput, FormLabel } from './SigninElements'

const Signin = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to = "/">DURMETAL</Icon>
                  <FormContent>
                      <Form action= "#">
                          <FormH1>Contáctanos</FormH1>
                          <FormLabel htmlFor= 'for'>Nombres y Apellidos</FormLabel>
                          <FormInput type='text' required/>
                          <FormLabel htmlFor= 'for'>Correo</FormLabel>
                          <FormInput type='email' required/>
                          <FormLabel htmlFor= 'for'>Detalles Cotización</FormLabel>
                          <FormInput type='password' required/>
                          <FormButton type= "submit">Mandar</FormButton>
                          {/* <Text>Forgot Password</Text> */}

                      </Form>
                  </FormContent>
              </FormWrap>
              </Container>  
        </>
    )
}
<Container>
<FormWrap>
    <Icon></Icon>
    <FormContent>
        <Form>
            <FormH1></FormH1>
        </Form>
    </FormContent>
</FormWrap>

</Container>
export default Signin