function encodeAndDecodeMessages() {
    let [encodeText, decodeText] = document.querySelectorAll('textarea');
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let message = '';
        let input = encodeText.value;

        for (let i = 0; i < input.length; i++) {
            message += String.fromCharCode(input[i].charCodeAt() + 1);
        }
        decodeText.value = message;
        encodeText.value = '';
    }

    function decode() {
        let message = '';
        let input = decodeText.value;

        for (let i = 0; i < input.length; i++) {
            message += String.fromCharCode(input[i].charCodeAt() - 1);
        }
        decodeText.value = message;
    }
}