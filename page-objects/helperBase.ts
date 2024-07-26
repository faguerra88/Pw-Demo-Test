import { type Page } from "@playwright/test";


export class HelperBase{
  readonly page: Page

  constructor(page: Page){
    this.page = page
  }

  async waitForNetwork(){

    await this.page.waitForLoadState('networkidle')
  }

}