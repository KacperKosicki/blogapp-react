const initialState = {
    categories:
    ["Sport", "News", "Movies"],
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe',
            category: 'News'
        },

        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe II',
            category: 'Sport'
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe III',
            category: 'Movies'
        },
    ],
}

export default initialState;