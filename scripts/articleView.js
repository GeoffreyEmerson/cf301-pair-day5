// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

articleView.initNewArticlePage = function() {
  // DONE: Ensure the main .tab-content area is revealed. We might add more tabs later.
  $('.tab-content').hide();
  $('#write').fadeIn('slow');
  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $($(this).data('content')).fadeIn('slow');
  });
  // DONE: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we
  // have data to export. Also, let's add focus event to help us select the JSON.
  $('#article-export').hide(); // Hides the JSON field upon page init.
  $('#article-export').on('click',function(){ // After the JSON gets populated, it will be clickable.
    $('#article-json').select(); // When clicked, the content is automagically selected and ready for copying.
  });

  // DONE: Add an event handler to update the preview and the export field if any inputs change.
  $('input, textarea').on('input', this.create);

  var inputForm = $('#new-form'); // Input area

  var rawTemplate = $('#article-template').html();
  articleView.completedFunc = Handlebars.compile(rawTemplate);
};

articleView.create = function() {
  // DONE: Set up a var to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
  var readyHtml;
  $('#articles').html('');
  // DONE: Instantiate an article based on what's in the form fields:

  var formValues = {}; // Empty object, filled in during input updates

  formValues['title'] = $('#article-title').val();
  formValues['body'] = $('#article-body').val();
  formValues['author'] = $('#article-author').val();
  formValues['authorUrl'] = $('#article-author-url').val();
  formValues['categorySlug'] = $('#article-category').val();
  formValues['publishStatus'] = $('#article-published').prop('checked');

  formValues['body'] = marked(formValues['body']); // Convert markup to html

  // DONE: Use our interface to the Handblebars template to put this new article into the DOM:
  var readyHtml = articleView.completedFunc(formValues);
  $('#articles').html(readyHtml);

  // DONE: Activate the highlighting of any code blocks:
  $('.article-body').find('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  // DONE: Export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  $('#article-json').val(JSON.stringify(formValues));
  $('#article-export').fadeIn();
};

articleView.initIndexPage = function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
