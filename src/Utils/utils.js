
export const handleClick1 = (event, linkto) => {
    var content_array = document.getElementsByClassName("main-content")
    for (var i = 0; i < content_array.length; i++) {
                const content_item = content_array.item(i)
                if (content_item.id === linkto){
                    content_item.style.display = "flex"
                }
                else {
                    content_item.style.display = "none"
                }

    }
}