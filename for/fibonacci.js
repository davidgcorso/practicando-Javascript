const fibonacci = (n) => {
    const resp = [0, 1];
    for (let i = 2; i<= n; i++) {
        resp[i] = resp[i -1] + resp[i - 2];
    }

    return resp[n];
}
    console.log(fibonacci(8));



    