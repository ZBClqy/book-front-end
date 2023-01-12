<template>
    <header>

        <adminHeader></adminHeader>
    </header>
    <div class="coninter">
        <nav>
            <adminMenu></adminMenu>
        </nav>
        <main>
            <div class="main_box">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import adminHeader from '../components/header/AdminHeader.vue'
import adminMenu from '../components/menu/AdminMenu.vue'

</script>

<style lang="scss" scoped>
.coninter{
    display: flex;
    main{
        flex: 1;
        width: 110rem;
        height: 100vh;
        padding:20px;
        padding-right: 10px;
        padding-top:6.3rem;
        box-sizing: border-box;
        box-sizing: border-box;
        .main_box{
            background-color:rgb(250, 250, 250);
            height: 100%;
            width: 100%;
            border-radius: 5px;
            box-shadow: 1px 1px 5px black;
            overflow-y:scroll;
            overflow-x: hidden;
        }
        .main_box::-webkit-scrollbar {
             width: 6px;
        }
        // 滚动条轨道
        .main_box::-webkit-scrollbar-track {
          background: rgb(239, 239, 239);
          border-radius: 2px;
        }
        // 小滑块
        .main_box::-webkit-scrollbar-thumb {
          background:  rgb(50, 56, 64);
          border-radius: 10px;
        }
        .main_box::-webkit-scrollbar-thumb:hover {
          background:rgb(50, 56, 64);
        }
    }
}
</style>
