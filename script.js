function update()
{
    var str = document.getElementById('cmt_body').value;
    var avg = str.length / 3;
    var words = str.split(' ');

    var lines = [];
    lines[0] = [];
    lines[1] = [];
    lines[2] = [];

    var needed_length = avg;
    var word, current_length;
    var idx = 0;

    for (i in words) {
        word = words[i];
        current_length = lines[idx].join(' ').length;
        
        if (lines[idx].join(' ').length >= needed_length && idx < 2) {
            idx++;
            needed_length = current_length - 3;

        }
        lines[idx].push(word);

    }

    lines[0] = lines[0].join(' ');
    lines[1] = lines[1].join(' ');
    lines[2] = lines[2].join(' ');

    var validation_class = (lines[1].length - lines[2].length == 2) ? 'validation_success' : 'validation_error';
    document.getElementById('result').innerHTML = '<pre><span class="' + validation_class + '">' + lines[0] + "\n" + lines[1] + "\n" + lines[2] + "</span></pre>";

    var statistics = "Number of characters: " + str.length;
    statistics += "<br />Number of words: " + words.length;
    statistics += "<br />Average word length: " + (str.length / words.length).toFixed(2); 
    document.getElementById('comment_stats').innerHTML = statistics;
}