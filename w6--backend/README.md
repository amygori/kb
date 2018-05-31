# Week 6: JavaScript, JSON, and APIs

## Day 1

- Using JavaScript with Rails (incl AJAX)
- Rails JS helpers
- controller/integration tests and system tests with Capybara

### Notes
- [DEMO: Holidays with AJAX](notes/holidays)
- [Amy's unfinished FreeShelf]( notes/amy-freeshelf)

## Day 2

- REST in Rails
- Building an API with Rails
- JSON and jBuilder
- [DEMO: cats API](notes/cats)

## Day 3

- Building RESTful resources
- API Authentication
- [DEMO: cats API with authentication](notes/cats-with-auth)

## Links

### Integration and System Testing

- [Integration Testing and System Testing by Chris Kottom](https://chriskottom.com/blog/2017/04/full-stack-testing-with-rails-system-tests/)
- [ActionDispatch::IntegrationTest](http://api.rubyonrails.org/v5.2.0/classes/ActionDispatch/IntegrationTest.html)
- [2015 article on controller testing](https://medium.com/ruby-on-rails/testing-rails-controllers-d3fc59a91a78)
- [article on controller testing being soft-deprecated](https://medium.com/table-xi/whats-up-with-rails-controller-tests-f0ece1fdd9f0)
- [DHH's philosophy on controllers](http://jeromedalbert.com/how-dhh-organizes-his-rails-controllers/)
- [Capybara with MiniTest](https://github.com/teamcapybara/capybara#using-capybara-with-minitest)
- [Capybara cheat sheet](https://gist.github.com/zhengjia/428105)
- [ActionDispatch::SystemTestCase](http://api.rubyonrails.org/v5.2.0/classes/ActionDispatch/SystemTestCase.html)

### Unobtrusive JS and AJAX

- [Unobtrusive JS Overview](https://m.patrikonrails.com/a-definitive-guide-to-railss-unobtrusive-javascript-adapter-ef13bd047fff)
- [HTML5 data attributes explained](https://johnresig.com/blog/html-5-data-attributes/)
-[AJAX on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
- [XMLHttpRequestObject on MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Working with JavaScript in Rails on RailsGuides](http://guides.rubyonrails.org/working_with_javascript_in_rails.html)
- [DHH on server-generated js responses](https://signalvnoise.com/posts/3697-server-generated-javascript-responses)

### REST

- [What REST means](https://codewords.recurse.com/issues/five/what-restful-actually-means)
- [The Rest Cookbook](http://restcookbook.com/)
- [What is a RESTful API? -video](https://youtu.be/Q-BpqyOT3a8)

### Rails APIs

- [Rails Guides: API Applications](http://guides.rubyonrails.org/api_app.html)
- [ActionController::API](http://api.rubyonrails.org/v5.2.0/classes/ActionController/API.html)
- [Rails Controller `respond_to`](http://api.rubyonrails.org/classes/ActionController/MimeResponds.html#method-i-respond_to)
- [Jbuilder](https://github.com/rails/jbuilder)
- [HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html)
- - [Rails Guides: Layouts and Rendering - The Status Option](http://guides.rubyonrails.org/layouts_and_rendering.html#the-status-option)
- [Rails Routing: Namespacing](http://guides.rubyonrails.org/routing.html#controller-namespaces-and-routing)

### Token Authentication

- [Good Overview of Token Auth, but pre-Rails 5](https://www.codeschool.com/blog/2014/02/03/token-based-authentication-rails/) -- you still might see this
- [Explains Rails 5 introduction of `has_secure_token`](https://blog.bigbinary.com/2016/03/23/has-secure-token-to-generate-unique-random-token-in-rails-5.html)
- [has_secure_token](http://api.rubyonrails.org/classes/ActiveRecord/SecureToken/ClassMethods.html#method-i-has_secure_token)
- [ActiveRecord::SecureToken](http://api.rubyonrails.org/classes/ActiveRecord/SecureToken/ClassMethods.html)
- [ActionController::HttpAuthentication::Token::ControllerMethods](http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token/ControllerMethods.html)
- [MDN HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
- [Action Controller Filters](http://guides.rubyonrails.org/action_controller_overview.html#filters)