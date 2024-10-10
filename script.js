function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let start = 0;
let end = s2.length;

if(s1.length < s2.length){
	return -1;
}else{
	while(end <= s1.length){
		if(s1.slice(start,end).toLowerCase() === s2.toLowerCase()){
			
			return start;
			
		}else{
			start+=1;
			end+=1;
		}
	}
	return -1;
}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
