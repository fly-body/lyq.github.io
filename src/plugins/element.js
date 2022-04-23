import Vue from 'vue'

import {
    Message,
    MessageBox,
    Form,
    Input,
    FormItem,
    Button
} from 'element-ui'

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm