export type Action = { type: "ADD_TOKEN"|"ADD_ID"; payload: string }

// esse método é o enviado pela função dispatch
export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token
})

export const addId = (id: string): Action => ({
  type: "ADD_ID",
  payload: id
})