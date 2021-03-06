FlowRouter.route('/', {
    name: 'welcome',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "welcome_content"});
    }
});

FlowRouter.route('/overall', {
    name: 'overall',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

FlowRouter.route('/issue', {
    name: 'issue',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "issue_content"});
    }
});

FlowRouter.route('/github_pull_request', {
    name: 'github_pull_request',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "pull_request_content"});
    }
});

FlowRouter.route('/github_push', {
    name: 'github_push',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "push_content"});
    }
});

FlowRouter.route('/github_star', {
    name: 'github_star',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "star_content"});
    }
});

FlowRouter.route('/post', {
    name: 'post',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "post_content"});
    }
});
