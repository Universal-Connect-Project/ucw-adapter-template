import {
  clickContinue,
  expectConnectionSuccess,
  generateDataTests,
  refreshAConnection,
  visitWithPostMessageSpy,
} from "@repo/utils-dev-dependency";
import {searchAndSelectFinicity} from '../shared/utils/finicity'
import {JobTypes} from '../../src/contract'

const makeAConnection = async (jobType) => {
  searchAndSelectFinicity()
  clickContinue()

  if ([JobTypes.ALL, JobTypes.VERIFICATION].includes(jobType)) {
    cy.findByText('Checking').click()
    clickContinue()
  }
  expectConnectionSuccess()
}

describe('finicity aggregator', () => {
  generateDataTests({makeAConnection, shouldTestVcEndpoint: true })

  it('refreshes an mx connection if given the correct parameters and hides the back button', () => {
    refreshAConnection({
      selectInstitution: searchAndSelectFinicity,
      enterCredentials: null
    })
  })
})
