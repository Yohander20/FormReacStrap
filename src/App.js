import "./App.css";
import { Form, FormGroup, Label, Col, Input,Button,Row} from "reactstrap";
import {useFormik} from "formik"
import * as Yup from "yup";

export default function App() {

  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      repeatPassword:"",
      address:"",
      city:"",
      state:"",
      zip:"",
      check:true
    },
  

    validationSchema: Yup.object({
      email:Yup.string().required("el email es obligatorio").email("no es un email valido"),
      password: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")],"Las contraseñas no son iguales"),
      repeatPassword:Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("password")],"Las contraseñas no son iguales"),
      address: Yup.string().max(20,"el campo address debe contener como 20 caracteres"),
      city:Yup.string().max(20,"el campo address debe contener como 20 caracteres"),
      zip:Yup.string().max(20,"el campo address debe contener como 20 caracteres"),
    }),

    

    onSubmit:(formData)=>{
      alert("Datos Enviados")
    }
  })


  return <div> 
    <Form onSubmit={formik.handleSubmit}>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          onChange={formik.handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
          onChange={formik.handleChange}
        />
      </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label for="repeatPassword">
          Repeat Password
        </Label>
        <Input
          id="repeatPassword"
          name="repeatPassword"
          placeholder="repeat password"
          type="password"
        />
      </FormGroup>
      </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="1234 Main St"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleAddress2">
      Address 2
    </Label>
    <Input
      id="exampleAddress2"
      name="address2"
      placeholder="Apartment, studio, or floor"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          Zip
        </Label>
        <Input
          id="exampleZip"
          name="zip"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      Check me out
    </Label>
  </FormGroup>
  <Button type="Submit">
    Sign in
  </Button>
</Form>
  </div>
}




