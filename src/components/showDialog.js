import { createApp } from "vue";
import Dialog from "./Dialog.vue"

export default function showDialog(title, handleCancel) {
    const div = document.createElement('div')
    const app = createApp(Dialog, {
        title,
        onclick: handleCancel
    })
    app.mount(div)
    document.body.appendChild(div)

    return () => {
        app.unmount()
        div.remove()
    }
}