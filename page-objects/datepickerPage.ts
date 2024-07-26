import { type Locator, type Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export default class DatepickerPage extends HelperBase {

   readonly formPickerInput: Locator
   readonly commonDatepicker: Locator
   readonly rangePickerInput: Locator
   readonly rangeDatepicker: Locator


  constructor(page: Page){
    super(page)
    this.formPickerInput = page.getByPlaceholder('Form Picker')
    this.rangePickerInput = page.getByPlaceholder('Range Picker')
    this.commonDatepicker = page.locator('nb-datepicker-container')
    this.rangeDatepicker = page.locator('nb-datepicker-container')

  }

  async selectCommonDate(date: Date){
    const today = new Date()
    await this.formPickerInput.click()
    await this.commonDatepicker.locator('nb-calendar-view-mode').click()
    if (date.getFullYear() > today.getFullYear()){
       while (await this.commonDatepicker.getByText(date.getFullYear().toString()).count() == 0){
        await this.page.locator('.next-month').click()
      }
    } else {
        while (await this.commonDatepicker.getByText(date.getFullYear().toString()).count() == 0){
        await this.page.locator('.prev-month').click()
        }
      }
    await this.commonDatepicker.getByText(date.getFullYear().toString()).click()
    await this.commonDatepicker.getByText(date.toLocaleString('en-US', {month: 'short'})).click()
    await this.commonDatepicker.locator('[class="day-cell ng-star-inserted"]').getByText(date.getDate().toString(), {exact: true}).click()
}


async selectRangeDate(firstDate: Date, secondDate: Date){
  const today = new Date()
  await this.rangePickerInput.click()
  if (firstDate.getFullYear() > today.getFullYear()){
    await this.rangeDatepicker.locator('nb-calendar-view-mode').click()
    while (await this.rangeDatepicker.getByText(firstDate.getFullYear().toString()).count() == 0){
      await this.page.locator('.next-month').click()
    }
  } else {
      await this.rangeDatepicker.locator('nb-calendar-view-mode').click()
      while (await this.rangeDatepicker.getByText(firstDate.getFullYear().toString()).count() == 0){
      await this.page.locator('.prev-month').click()
      }
    }
  await this.rangeDatepicker.getByText(firstDate.getFullYear().toString()).click()
  await this.rangeDatepicker.getByText(firstDate.toLocaleString('en-US', {month: 'short'})).click()
  await this.rangeDatepicker.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(firstDate.getDate().toString(), {exact: true}).click()

  if (secondDate.getFullYear() > firstDate.getFullYear()){
    await this.rangeDatepicker.locator('nb-calendar-view-mode').click()
    while (await this.rangeDatepicker.getByText(secondDate.getFullYear().toString()).count() == 0){
      await this.page.locator('.next-month').click()
    }
  } else {
      await this.rangeDatepicker.locator('nb-calendar-view-mode').click()
      while (await this.rangeDatepicker.getByText(secondDate.getFullYear().toString()).count() == 0){
      await this.page.locator('.prev-month').click()
      }
    }
  await this.rangeDatepicker.getByText(secondDate.getFullYear().toString()).click()
  await this.rangeDatepicker.getByText(secondDate.toLocaleString('en-US', {month: 'short'})).click()
  await this.rangeDatepicker.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(secondDate.getDate().toString(), {exact: true}).click()

}
}
