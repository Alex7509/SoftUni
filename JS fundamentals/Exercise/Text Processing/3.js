function extractFile(input){

    let splited = input.split('\\');
    let nameAndExtension = splited.pop().split('.');

    let fileName = nameAndExtension.slice(0, nameAndExtension.length - 1).join('.');
    let fileExtension = nameAndExtension.pop();

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
     
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');