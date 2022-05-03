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
    MenuItem
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

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm