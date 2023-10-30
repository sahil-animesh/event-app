import { gql } from 'graphql-tag';

export const MUTATION = {

  AUTH: {
    CREATE_USER: gql`
                  mutation CreateUser($name: String!, $email: String!) {
                    createUser(input: { name: $name, email: $email }) {
                        id
                        name
                        email
                    }
                  }`,
                  
    LOGIN_USER:gql`
                mutation LoginUser($contact_number: String!) {
                  loginUser(input: {contact_number: $contact_number}) {
                    success
                    message
                    token
                  }
                }
    
    `              
  },
  MAIN: {
    
  }
}
