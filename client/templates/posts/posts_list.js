var postsData = [{
        title: '意派',
        url: 'http://epub360.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: '百度',
        url: 'http://baidu.com'
    }
];
Template.postsList.helpers({
    posts: postsData
})