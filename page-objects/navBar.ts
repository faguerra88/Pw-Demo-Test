import { type Locator, type Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export default class NavBar extends HelperBase {
  readonly formsLink: Locator
  readonly formFieldsLink: Locator
  readonly datePickerLink: Locator
  readonly dashboardLink: Locator

  constructor(page: Page){
    super(page)
    this.formsLink = page.getByTitle('Forms')
    this.formFieldsLink = page.getByTitle('Form Layouts')
    this.datePickerLink = page.getByTitle('Datepicker')
    this.dashboardLink = page.getByTitle('IoT Dashboard')
  }

  async FormLayoutsPage(){
    if (await this.formsLink.getAttribute('aria-expanded') == "false"){
      await this.formsLink.click()
    }
    await this.formFieldsLink.click()
  }

  async DatePickerPage(){
    if (await this.formsLink.getAttribute('aria-expanded') == "false"){
      await this.formsLink.click()
    }
    await this.datePickerLink.click()
  }

  async IotDashboardPage(){
    await this.dashboardLink.click()
  }
}