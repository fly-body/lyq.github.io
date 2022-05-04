import Vue from 'vue'

import {
    Message,
    MessageBox,
    Form,
    Input,
    FormItem,
    Button,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Card,
    TabPane,
    Tabs,
    Col,
    DatePicker,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Table,
    TableColumn,
    Select,
    Option,
    Switch
} from 'element-ui'

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm