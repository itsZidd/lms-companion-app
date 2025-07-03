import { DASHBOARD_PAGE_MENU, DashboardMenuItem } from "./menus/dashboard"
import { LANDING_PAGE_MENU, LandingMenuItem } from "./menus/landing"

type ChortexiaConstantsProps = {
    LandingPageMenu: LandingMenuItem[]
    DashboardMenu: DashboardMenuItem[]
    // signUpForm: SIGN_UP_FORM,
    // signInForm: SIGN_IN_FORM,
    // groupList: GROUP_LIST,
    // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
}

export const CHORTEXIA_CONSTANTS: ChortexiaConstantsProps = {
    LandingPageMenu: LANDING_PAGE_MENU,
    DashboardMenu: DASHBOARD_PAGE_MENU,
    // signUpForm: SIGN_UP_FORM,
    // signInForm: SIGN_IN_FORM,
    // groupList: GROUP_LIST,
    // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
}
