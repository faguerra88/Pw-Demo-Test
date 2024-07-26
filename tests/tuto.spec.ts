import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200');
  await expect(page).toHaveTitle(/playwright/);
})

test('click ligh button', async ({page}) => {
  const pm = new PageManager(page)
  await pm.navigateTo().IotDashboardPage()
  const button = page.locator('[ng-reflect-title="Light"]').locator('[class="status paragraph-2"]');
  await expect(button).toHaveText('ON');
  await button.click();
  await expect(button).toHaveText('OFF');
  const icon = page.locator('[ng-reflect-title="Light"]').locator('.status-primary')
  await expect(icon).toHaveCSS('color', 'rgb(143, 155, 179)');
  await expect(icon).toHaveCSS('background-image', /rgba\(0,\s0,\s0,\s0\)/);
})



test('check option 1 then 2', async ({page}) => {
  const pm = new PageManager(page)
  await pm.navigateTo().FormLayoutsPage();
  await pm.onFormLayoutsPage().selectOptionOne()
  await expect(pm.onFormLayoutsPage().optionOne).toBeChecked();
  await pm.onFormLayoutsPage().selectOptionTwo()
  await expect(pm.onFormLayoutsPage().optionTwo).toBeChecked();
  await expect(pm.onFormLayoutsPage().optionOne).not.toBeChecked();
 // await pm.navigateTo().IotDashboardPage()
 // await pm.navigateTo().waitForNetwork()
});


test('datepickers', async ({page})=>{
  const pm = new PageManager(page)
  const date1 = new Date('Jan 1 1988')
  const date2 = new Date('Dec 31 1988')

  await pm.navigateTo().DatePickerPage()
  await pm.onDatepickerPage().selectCommonDate(date1)
  await pm.onDatepickerPage().selectRangeDate(date1,date2)
  await expect(pm.onDatepickerPage().formPickerInput).toHaveValue(`${date1.toLocaleString('en-US', {month: 'short'})} ${date1.getDate()}, ${date1.getFullYear()}`)
  if (date1 < date2){
  await expect(pm.onDatepickerPage().rangePickerInput).toHaveValue(`${date1.toLocaleString('en-US', {month: 'short'})} ${date1.getDate()}, ${date1.getFullYear()} - ${date2.toLocaleString('en-US', {month: 'short'})} ${date2.getDate()}, ${date2.getFullYear()}`)
  } else {
  await expect(pm.onDatepickerPage().rangePickerInput).toHaveValue(`${date2.toLocaleString('en-US', {month: 'short'})} ${date2.getDate()}, ${date2.getFullYear()} - ${date1.toLocaleString('en-US', {month: 'short'})} ${date1.getDate()}, ${date1.getFullYear()}`)
  }
})



