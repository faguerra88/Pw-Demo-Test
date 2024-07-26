import { type Locator, type Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export default class FormLayoutsPage extends HelperBase {

  readonly usingTheGridCard: Locator
  readonly optionOne: Locator
  readonly optionTwo: Locator

  constructor(page: Page){
    super(page)
    this.usingTheGridCard = page.locator('nb-card', {hasText: 'Using the grid'});
    this.optionOne = this.usingTheGridCard.getByRole('radio', {name: 'Option 1'})
    this.optionTwo = this.usingTheGridCard.getByRole('radio', {name: 'Option 2'})
  }

  async selectOptionOne(){
    await this.optionOne.check({force: true})
  }
  async selectOptionTwo(){
    await this.optionTwo.check({force: true})
  }

}