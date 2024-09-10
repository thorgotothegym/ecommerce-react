import axios from 'axios'

type Newsletter = {
  email: string
}

export const AddNewsletter = async ({ email }: Newsletter) => {
  //example service
  const { data } = await axios.post('/newsletter', { email })
}
