$(document).ready(function() {

    //Slider

    $('.galery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        speed: 2000
    });

    //Posts

    var posts = [{
            title: 'Title of article',
            date: new moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima optio error dolore corrupti, est exercitationem vel nihil ullam?'
        },
        {
            title: 'Title of article 1',
            date: new moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima optio error dolore corrupti, est exercitationem vel nihil ullam?'
        },
        {
            title: 'Title of article 2',
            date: new moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima optio error dolore corrupti, est exercitationem vel nihil ullam?'
        },
        {
            title: 'Title of article 3',
            date: new moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima optio error dolore corrupti, est exercitationem vel nihil ullam?'
        },
        {
            title: 'Title of article 4',
            date: new moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima optio error dolore corrupti, est exercitationem vel nihil ullam?'
        }
    ];
    posts.forEach((item, index) => {
        var post = '';
        post += '<article class="post">';
        post += "<h2>" + item.title + "</h2>";
        post += "<span class='date'>" + item.date + "</span>";
        post += "<p>" + item.content + "</p>";
        post += '<a href="" class="button_more">Read more</a>';
        post += '<div class="line"></div></article>';
        console.log(post);

        $('#posts').append(post);
    });

    // <article class="post">
    //     <h2>Title of article</h2>
    //     <span class="date">Publish date</span>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque animi nesciunt delectus, distinctio similique quisquam ullam possimus quas sed maxime magnam saepe totam placeat. Accusantium debitis nobis maxime deserunt, provident,
    //         eveniet asperiores necessitatibus libero autem ut nesciunt iste, inventore dolores et ratione dolorem sequi vel distinctio officia adipisci. Delectus deleniti dolorum fugit id unde voluptatem libero architecto excepturi quam minima
    //         optio error dolore corrupti, est exercitationem vel nihil ullam?</p>
    //     <a href="" class="button_more">Read more</a>
    //     <div class="line"></div>
    // </article>

    //theme selector

    var theme = $('#theme');

    $('#to_green').click(function() {
        theme.attr('href', 'css/green.css')
    });
    $('#to_red').click(function() {
        theme.attr('href', 'css/red.css')
    });
    $('#to_blue').click(function() {
        theme.attr('href', 'css/blue.css')
    });

    //up

    $('.up').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    });

    //Fake login

    $("#login form").submit(function() {
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });
    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_paragraph = $('#about p');
        $('#about p').html('<br><strong>Welcome, ' + form_name + '</strong>');
        $("#login").hide();
        about_paragraph.append('<a href="#" id="logout" >Logout</a>')
        $('#logout').click(function() {
            localStorage.clear();
            location.reload();
        });
    }


});