function subInAll(sub, array) {
	for (var i=0; i<array.length; i++) {
		var str = array[i];
		if (str.indexOf(sub)<0) return false;
	}
	return true;
}

function lcsFinder(array) {
	var result = {lcs: []};
	var maxLength = 0;
	var current = [];
	var first = array[0];
	for (var i=0; i<first.length; i++) {
		var c = first.charAt(i);
		if (subInAll(c, array)) {
			for (var j=i+1; j<=first.length; j++) {
				var sub = first.substring(i, j);
				if (subInAll(sub, array)) {
					if (sub.length>maxLength) {
						current = [];
						current.push(sub);
						maxLength = sub.length;
					} else if (sub.length==maxLength) {
						current.push(sub);
					}
				}
			}
		}
	}
	for (var i=0; i<current.length; i++) {
		result.lcs.push({value: current[i]});
	}
	return result;
}
var args = process.argv.slice(2);
if(args.length == 0){
    console.log();
}else{
    var x = lcsFinder(args);
    if(x.lcs.length == 0){
        console.log();
    }else{
            console.log(x.lcs[0].value);
    }
	}