let text = 'playwright'
let reverse = ''
for (i = text.length -1; i>=0; i--) {
    reverse = reverse + text.charAt(i)

}
    console.log(reverse)
    if (text==reverse)
    {
        console.log("Text is a palyndrome")
    }
    else{
        console.log("Text is not a palindrome")
    }
    




