import { Anchor, Button, Checkbox, Group, Radio, PasswordInput, rem, TextInput } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../Services/UserService';
import signupValidation from '../../Services/FormValidation';

const form= {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
}

const SignUp = () => {
  const [value, setValue] = useState('react');
  const [data,setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
  const handleChange=(event:any) => {
    if(typeof(event)=="string"){
      setData({...data, accountType:event});
      return;
    }
    let name = event.target.name,
    value = event.target.value;
    setData({...data, [name]:value});
    setFormError({...formError, [name]:signupValidation(name, value)})
    if(name === "password" && data.confirmPassword !== ""){
      let err = "";
      if(data.confirmPassword !== value) err = "Passwords do not match.";
      setFormError({...formError, [name]:signupValidation(name, value), confirmPassword:err});
    }
    if(name === "confirmPassword"){
      if(data.password !== value) setFormError({...formError,[name]:"Passwords do not match."});
      else setFormError({...formError, confirmPassword: ""});
    }
  }

  const handleSubmit=()=>{
    let valid = true, newFormError:{[key:string]:string}={};
    for(let key in data) {
      if(key === "accountType") continue;
      if(key !== "confirmPassword") newFormError[key]=signupValidation(key, data[key]);
      else if(data[key] !== data["password"]) newFormError[key] = "Passwords do not match.";
      if(newFormError[key]) valid=false;
    }
    setFormError(newFormError);
    if(valid===true){
      registerUser(data).then((res)=>{
      console.log(res);
      }).catch((err)=>console.log(err));
    }
    
  }
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
        <div className='text-2xl font-semibold'>Create Account</div>
        <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} withAsterisk label="Full name" placeholder="Your name" />
        <TextInput error={formError.email} value={data.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{width: rem(16), height: rem(16)}} />} label="Email" placeholder="Your email" />
        <PasswordInput error={formError.password} value={data.password} name="password" onChange={handleChange} leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5} />} label="Password" placeholder="Password" />
        <PasswordInput error={formError.confirmPassword} value={data.confirmPassword} name="confirmPassword" onChange={handleChange} leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />
        <Radio.Group
          value={data.accountType}
          onChange={handleChange}
          label="You are ?"
          withAsterisk
        >
          <Group mt="xs" >
            <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg' autoContrast value="APPLICANT" label="Applicant" />
            <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg' autoContrast value="EMPLOYER" label="Employer" />
          </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
        <Button onClick={handleSubmit} autoContrast variant='filled'>Sign up</Button>
        <div className='mx-auto'>Have an account? <Link to="/login" className='text-bright-sun-400 hover:underline'>Login</Link></div>
    </div>
  )
}

export default SignUp