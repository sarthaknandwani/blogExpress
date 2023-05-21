const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res)=>{
    res.render('home')
})

router.get('/blog', (req, res)=>{
    res.render('blogHome', {
        blogs: blogs
    })
})

router.get('/blogpost/:slug', (req, res)=>{
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
    // console.log(myBlog)
    // res.sendFile(path.join(__dirname, "../views/blogPage.html"))
})

module.exports = router