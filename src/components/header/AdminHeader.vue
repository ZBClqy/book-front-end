<template>
    <div class="header">
        <div class="circle_box">
            <div class="circle_one"></div>
            <div class="circle_two"></div>
            <div class="circle_three"></div>
        </div>
       <div class="one">
            <div class=""></div>
            <div>
                <h2>menu</h2>
            </div>
       </div>
       <div class="breadcrumb">
            <breadcrumb></breadcrumb>
       </div>
       <div class="two">
            <h1>张三管理林四</h1>
       </div>
       <div class="three">
            <div>欢迎您的到来!!</div>
            <div><img src="../../assets/image/R.gif" alt=""></div>
            <div class="exit">退出</div>
       </div>
    </div>
</template>

<script setup lang="ts">
import breadcrumb from './components/MyBreadcrumb.vue'
</script>

<style lang="scss" scoped>
@import '../../style.scss';
    .header{
        overflow: hidden;
        width: 100vw;
        display: grid;
        grid-template-columns: 19rem  auto 20rem;
        grid-column-gap: 1.5rem;
        filter: drop-shadow(0 0 10px linear-gradient(red,blue));
        grid-template-rows: 5rem;
        align-items: center;
        color:white;
        text-align: center;
        background-color: rgb(50, 56, 64);
        position: fixed;
        top: 0;
        left: 0;
        font-size: 1rem;
        .circle_box{
            position: absolute;
            top: 0;
            left: 0;
            animation: translatecirlce 15s infinite linear;
            transform: translateX(-100rem);
            .circle_one{
            width: 40rem;
            height: 40rem;
            background-color: rgba($color: #fff, $alpha: 0.6);
            position: absolute;
            border-radius: 55% 33% 56% 29%;
            top: 3rem;
            animation: rotatecircle 3.5s infinite linear;
            z-index: -1;
            &::before{
                content: "";
                width: 40rem;
                height: 40rem;
                display: block;
                position: absolute;
                border-radius:  75% 43% 55% 33%;
                transform: rotate(-45deg);
                background-color: rgba($color: #fff, $alpha: 0.9);
            }
            }

            .circle_two{
            width: 40rem;
            height: 40rem;
            background-color: rgba($color: #fff, $alpha: 0.6);
            position: absolute;
            border-radius: 33% 56% 55% 44%;
            top: 3rem;
            left: 25rem;
            animation: rotatecircle 2.5s infinite linear;
            z-index: -1;
            &::before{
                content: "";
                width: 40rem;
                height: 40rem;
                display: block;
                position: absolute;
                border-radius: 75% 43% 55% 39%;
                transform: rotate(-45deg);
                background-color: rgba($color: #fff, $alpha: 0.9);
            }
            }

            .circle_three{
            width: 40rem;
            height: 40rem;
            background-color: rgba($color: #fff, $alpha: 0.6);
            position: absolute;
            border-radius: 33% 55% 56% 37%;
            top: 3rem;
            left: 50rem;
            animation: rotatecircle 2s infinite linear;
            z-index: -1;
            &::before{
                content: "";
                width: 40rem;
                height: 40rem;
                display: block;
                position: absolute;
                border-radius:  75% 43% 55% 33%;
                transform: rotate(-60deg);
                background-color: rgba($color: #fff, $alpha: 0.9);
            }
            }
        }
        .one{
            text-align: right;
        }

        .breadcrumb{
            width: 20rem;
            position: absolute;
            left: 10rem;
            top: 50%;
            transform: translateY(-50%);
        }
        .two{
            h1{
                color:white;
                font-family:cursive;
                font-size: 2rem;
            }
        }
        .three{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            img{
                margin:0 1rem;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
            }
            .exit{
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }

    @keyframes slideprojector{
        0%{
            filter: drop-shadow(0 0 10px #44cef6);
        }
        25%{
            filter: drop-shadow(0 0 10px #ff2d51);
        }
        50%{
            filter: drop-shadow(0 0 10px #c9dd22);
        }
        75%{
            filter: drop-shadow(0 0 10px #fff143);
        }
        100%{
            filter: drop-shadow(0 0 10px #44cef6);
        }
    }

    @keyframes rotatecircle{
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes translatecirlce{
        100%{
            transform: translateX(100rem)
        }
    }
</style>
