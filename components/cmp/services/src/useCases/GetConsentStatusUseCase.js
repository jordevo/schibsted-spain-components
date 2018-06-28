export class GetConsentStatusUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  async execute() {
    return this._repository.getConsentStatus()
  }
}