
// 第５回課題解答例 //

function kadai(word){
    use_dict();
    function find(word, left, right, wl){
        if (wl[left] == word) return left;
        else if (wl[right] == word) return right;
        else if (left + 1 == right) return -right;
        else {
            var mid = Math.floor((left + right) / 2);
            if (wl[mid] < word)
                return find(word, mid, right, wl);
            else 
                return find(word, left, mid, wl);
        }
    }
    var pos = find(word, 0, wordlist.length, wordlist);
    var res = [];
    var ww = word;
    if (pos < 0){
        ww = '???';
        pos = -pos - 1;
    }
    for (i = Math.max(pos - 5, 0); i < pos; i++)
        res.push(wordlist[i]);
    res.push(ww);
    for (i = pos + 1; i < Math.min(pos + 6, wordlist.length); i++)
        res.push(wordlist[i]);
    return res;
}

puts(kadai("meijo"));
puts(kadai("memory"));
