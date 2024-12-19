let s="shivanimma"
let maxLength= 0;
let start = 0;
 
for(let i=0; i<s.length; i++){
    for(let j=start; j<i; j++){
        if(s.charAt(i)==s.charAt(j)){
            start =j+1;
        }
    }
    let currentLength = i-start+1;
    if (currentLength > maxLength) {
        maxLength = currentLength;
    }
}    
console.warn(maxLength);