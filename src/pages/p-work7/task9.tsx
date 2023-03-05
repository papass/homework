import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

interface IForm {
  name: string
  password: string
  repassword: string
}

interface IErrors {
  [key: string]: any;
}

export function Task9 () {
  const [ form, setForm ] = useState<IForm>({
    name:'',
    password: '',
    repassword: ''
  })
  const [ errors, setErrors ] = useState<IErrors>({})

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
      alert('Спаисбо за регистрацию!')
    }
  }

  const findFormErrors = () => {
    const { name, password, repassword } = form
    const newErrors = {} as IErrors
    // name errors
    if ( !name || name === '' ) newErrors.name = 'Заполните поле'
    else if ( name.length > 30 ) newErrors.name = 'Слишком длинное'
    // food errors
    if ( !password || password === '' ) newErrors.password = 'Введите пароль'
    if ( !repassword || repassword === '' ) newErrors.repassword = 'Повторите пароль'
    else if (password !== repassword) newErrors.repassword = 'Пароли не совпадают'

    return newErrors
  }

  return (
    <div className='App d-flex flex-column align-items-center'>
      <h1>Форма регистрации</h1>
      <Form style={{ width: '300px' }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('name', e.target.value) }
            isInvalid={ !!errors.name }
          />
          <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Пароль</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('password', e.target.value) }
            isInvalid={ !!errors.password }
          />
          <Form.Control.Feedback type='invalid'>{ errors.password }</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('repassword', e.target.value) }
            isInvalid={ !!errors.repassword }
          />
          <Form.Control.Feedback type='invalid'>{ errors.repassword }</Form.Control.Feedback>
        </Form.Group>
        <Button type='submit' className='mt-3' onClick={ handleSubmit }>Регистрация</Button>
      </Form>
    </div>
  )
}