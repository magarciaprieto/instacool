import React from "react";
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps, WrappedFieldInputProps } from "redux-form";

const style = {
  img: {
    borderRadius: '100%',
    cursor: 'pointer',
  },
  file: {
    display: 'none',
  }
}

const handleChange = (submitProfileImage: () => void, input: WrappedFieldInputProps) => async (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()
  const { onChange } = input
  const { files } = e.target
  if(files) {
    await onChange(files[0])
    submitProfileImage()
  }
}

interface IProfileImg {
  submitProfileImage: () => void
}

function RenderField({ input, submitProfileImage }: WrappedFieldProps & IProfileImg ) {
  return (
    <div>
      <input onChange={handleChange(submitProfileImage, input)} style={style.file} type='file' id='profileImage' />
      <label htmlFor='profileImage'>
        <img style={style.img} src='http://placekitten.com/100/100' alt='' />
      </label>
    </div>
  )
}

function ProfileImg( {handleSubmit, submitProfileImage, ...props}: InjectedFormProps<{}, IProfileImg> & IProfileImg) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name='profileImg' component={RenderField} submitProfileImage={submitProfileImage} />
    </form>  
  )
}

export default reduxForm<{}, IProfileImg>({
  form: 'profileImg'
})(ProfileImg)