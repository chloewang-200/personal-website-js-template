const blogPostsData = [
    {
        image: "blogs/components/mazeCity/imgs/mazeCity.png",
        title: "Utopian Maze Generator with Pathfinding Algorithms",
        date: "2023-10-19",
        intro: "Generating and navigating 3D mazes uses pathfinding algorithms.",
        link: "blogs/components/mazeCity/index.html"
    },
    {
        image: "blogs/components/pattern/imgs/tree1.png",
        title: "Shape Grammar and Generative Pattern",
        date: "2023-10-18",
        intro: "An automatic pattern generator using Shape Grammar (a system of rewriting shape rules).",
        link: "blogs/components/pattern/index.html"
    },
    {
        image: "blogs/components/floorPlan/imgs/floor.gif",
        title: "A Reduction to the Floor Plan Generation Problem",
        date: "2022-05-17",
        intro: "An exploration of reducing floor plan generation problem to box stacking problem.",
        link: "blogs/components/floorPlan/index.html"
    },
    
    
];

blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));