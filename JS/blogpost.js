var blogList = document.getElementById("blog-list")

function createBlogPreview(text,img,desc){
    var BlogPreviewContainer = document.createElement("div")
    BlogPreviewContainer.className = "blog-preview"
    var BlogPreviewImg = document.createElement("img")
    BlogPreviewImg.src = img
    BlogPreviewContainer.appendChild(BlogPreviewImg)
    var TextNode = document.createElement("h1")
    TextNode.innerHTML = text
    BlogPreviewContainer.appendChild(TextNode)
    blogList.appendChild(BlogPreviewContainer)
}

createBlogPreview("Title", "img/robloxbackground.png", "Description")