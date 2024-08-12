module.exports = function check(str, bracketsConfig) {
    let startToEnd = {};
    let endToStart = {};
    bracketsConfig.forEach((e) => {
        startToEnd[e[0]] = e[1];
        endToStart[e[1]] = e[0];
    });
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let cur = str[i];
        if (endToStart[cur] !== undefined) {
            if (endToStart[cur] === cur) {
                if (stack[stack.length - 1] === cur) stack.pop();
                else stack.push(cur);
                continue;
            }
            if (stack.length === 0 || stack.pop() !== endToStart[cur])
                return false;
        } else {
            stack.push(cur);
        }
    }
    return stack.length === 0;
};
