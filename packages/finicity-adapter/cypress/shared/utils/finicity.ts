import { searchByText } from './widget'

export const searchAndSelectFinicity = () => {
  searchByText('finbank')
  cy.findByLabelText('Add account with fin Bank').first().click()
}
