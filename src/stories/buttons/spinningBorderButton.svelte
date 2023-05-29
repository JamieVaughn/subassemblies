<button>Loading</button>

<style>

button {
    position: relative;
    margin: auto;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;
}
    
    button:hover {
        filter: contrast(1.1);
    }
    
    button:active {
        transform: scale(1.2);
    }
    
    button::before,
    button::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 2px solid gold;
        transition: all .5s;
        animation: clippath 3s infinite linear;
        border-radius: 10px;
    }
    
    button::after {
        animation: clippath 3s infinite -1.5s linear;
    }


@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 98% 0);
    }
    
    25% {
        clip-path: inset(0 98% 0 0);
    }
    50% {
        clip-path: inset(98% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 98%);
    }
}

</style>