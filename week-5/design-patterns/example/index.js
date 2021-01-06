




let container = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: function () {
                ++i;
                let value = i <= 10 ? i : undefined;
                let done = i <= 10 ? false : true;
                return { value, done }
            }
        }
    }
}



for (let ele of container) {
    console.log(ele)
}