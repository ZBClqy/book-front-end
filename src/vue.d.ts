declare module "*.vue"{
    import { defineComponent } from "vue"
    const Component:ReturnType<typeof defineComponent>
    export default Component;
}

declare module "*.ts"{
    const Component:Function
    export default Component;
}