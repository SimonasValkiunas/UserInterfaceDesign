document.querySelector("#form").addEventListener("submit", function(e){
        e.preventDefault();

        Clear();

        var file = document.getElementById("file").files[0];
        var reader = new FileReader();

        reader.onload = function(fileLoadedEvent){

            var text = fileLoadedEvent.target.result;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "text/xml");
            PrintTable(xml);

        };

        reader.readAsText(file, "UTF-8");
});
const Clear = () => {

        document.getElementById("table").getElementsByTagName("tbody")[0].innerHTML = '';
        document.getElementById("table").getElementsByTagName("thead")[0].innerHTML = '';

}
const IsTagOkey = (tag) => {

    return tag !== undefined && tag.tagName !== undefined;

}

const PrintTable = (xml) => {

    let parent = xml.childNodes[0];
    let tagName = parent.childNodes[0].nodeName === '#text' ? parent.childNodes[1].tagName : parent.childNodes[0].tagName;
    let childs = xml.getElementsByTagName(tagName);
    let headers = '';

    for(let i = 0; i < childs.length; ++i) {

        let columns = childs[i].childNodes;
        let row = '';

        row += '<tr>';

        for(let j = 0; j < columns.length; ++j) {
            if(IsTagOkey(columns[j])) {
                if(i === 0) {
                    headers += '<th>' + columns[j].tagName + '</th>';
                }
                row += '<td>' + columns[j].innerHTML + '</td>';
            }
        }
        row += '</tr>';
        document.getElementById("table").getElementsByTagName("tbody")[0].innerHTML += row;
        }
    document.getElementById("table").getElementsByTagName("thead")[0].innerHTML += headers;
};
