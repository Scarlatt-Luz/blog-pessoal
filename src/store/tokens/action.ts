export type Action = { type: "ADD_TOKEN"; payload: string }

// esse método é o enviado pela função dispatch
export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token
})