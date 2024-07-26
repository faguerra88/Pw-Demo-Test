import { type Page } from "@playwright/test";
import NavBar from './navBar'
import FormLayoutsPage from "./formLayoutsPage";
import DatepickerPage from "./datepickerPage";


export  class PageManager{

  private readonly page: Page
  private readonly navBar: NavBar
  private readonly formLayoutsPage: FormLayoutsPage
  private readonly datepickerPage: DatepickerPage

  constructor(page: Page){

    this.page = page
    this.navBar = new NavBar(this.page)
    this.formLayoutsPage = new FormLayoutsPage(this.page)
    this.datepickerPage = new DatepickerPage(this.page)

  }

  navigateTo(){
    return this.navBar
  }

  onFormLayoutsPage(){
    return this.formLayoutsPage
  }

  onDatepickerPage(){
    return this.datepickerPage
  }

}